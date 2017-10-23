import { Point as P2TPoint, Triangle, SweepContext } from 'poly2tri';
import { BlankView } from '../Core';
import { PriorityQueue } from 'typescript-collections';

const engine: BoilerplateEngine = window;

export type RtsSimulationState = {
    staticTerrainConfiguration: StaticTerrainConfiguration,
    temporaryHoles: Point2[][],
};

export type RtsRenderConfiguration = {
    renderTransform: (p: Point2) => Point2,
    pathfindingQueries: [Point2, Point2][],
    agentRadius: number,
    enableRenderPolyTree?: boolean,
    enableRenderWaypoints?: boolean,
    enableRenderBarriers?: boolean,
    enableRenderVisibilityGraph?: boolean,
    triangulationStrokeStyle?: StrokeStyle,
    triangulationFillStyle?: FillStyle,
    temporaryHoleStrokeStyle?: StrokeStyle,
    temporaryHoleFillStyle?: FillStyle,
}

export class RtsSimulationRenderer {
    constructor(private model: RtsSimulationState) {
    }

    public render(config: RtsRenderConfiguration): void {
        const terrainView = ErodedTerrainView.build(this.model.staticTerrainConfiguration, this.model.temporaryHoles || [], config.agentRadius);
        const transform = (p: Point2) => config.renderTransform(p);

        function renderPolyNode(n: ClipperLib.PolyNode, isHole: boolean) {
            let contour = n.Contour().map(PointConversion.c2b);
            if (contour.length !== 0) {
                const transformedContour = contour.map(transform);
                engine.drawPoly(isHole ? '#FF0000' : '#FFFFFF', transformedContour);
            }
            n.Childs().forEach(c => renderPolyNode(c, !isHole));
        }

        engine.clear();

        if (config.enableRenderPolyTree) {
            renderPolyNode(terrainView.punchedLand, terrainView.punchedLand.IsHoleNode());
        }

        if (config.enableRenderWaypoints) {
            terrainView.waypoints.forEach(p => {
                p = transform(p);
                engine.fillEllipse('#FF0000', p[0] - 5, p[1] - 5, 10, 10);
            });
        }

        if (config.enableRenderBarriers) {
            terrainView.barriers.forEach(([p1, p2]) => {
                engine.drawLine('#33FF00', transform(p1), transform(p2));
            });
        }

        if (config.enableRenderVisibilityGraph) {
            terrainView.edgesByWaypointIndex.forEach((edges, wi) => {
                edges.forEach(edge => engine.drawLine(
                    '#00FFFF',
                    transform(terrainView.waypoints[edge.sourceWaypointIndex]),
                    transform(terrainView.waypoints[edge.destinationWaypointIndex])
                ));
            });
        }

        if (config.triangulationFillStyle || config.triangulationStrokeStyle) {
            PolygonOperations.enumerateLandPolyNodes(terrainView.punchedLand).forEach(landPolyNode => {
                const sc = new SweepContext(landPolyNode.Contour().map(PointConversion.c2p));
                landPolyNode.Childs().forEach(holePolyNode => {
                    sc.addHole(holePolyNode.Contour().map(PointConversion.c2p));
                });
                try {
                    sc.triangulate();
                    sc.getTriangles().map(t => t.getPoints().map(PointConversion.p2b)).forEach(([p1, p2, p3]) => {
                        if (config.triangulationFillStyle) {
                            engine.fillPoly(config.triangulationFillStyle, [
                                transform(p1),
                                transform(p2),
                                transform(p3)
                            ]);
                        }
                        if (config.triangulationStrokeStyle) {
                            engine.drawLine(config.triangulationStrokeStyle, transform(p1), transform(p2));
                            engine.drawLine(config.triangulationStrokeStyle, transform(p2), transform(p3));
                            engine.drawLine(config.triangulationStrokeStyle, transform(p3), transform(p1));
                        }
                    });
                } catch (e) {
                    console.log('p2t error', e);
                    engine.drawPoly('#FF7C00', landPolyNode.Contour().map(PointConversion.c2b));
                    console.log(landPolyNode);
                    throw e;
                }
            });
        }

        if (config.temporaryHoleFillStyle || config.temporaryHoleStrokeStyle) {
            this.model.temporaryHoles.forEach(hole => {
                const transformed = hole.map(transform);
                if (config.temporaryHoleFillStyle) engine.fillPoly(config.temporaryHoleFillStyle, transformed);
                if (config.temporaryHoleStrokeStyle) engine.drawPoly(config.temporaryHoleStrokeStyle, transformed);
            });
        }

        const localPathfinder = new LocalPathfinder(terrainView);
        config.pathfindingQueries.forEach(([source, dest]) => {
            const path = localPathfinder.computePath(source, dest);
            if (!path) {
                engine.drawLine('#FF0000', transform(source), transform(dest));
            } else {
                engine.zip(path, path.slice(1), (p1: Point2, p2: Point2) => engine.drawLine('#00FF00', transform(p1), transform(p2)));
            }
        });
    }
}

export class StaticTerrainConfiguration {
    constructor (
        public landContours: Point2[][],
        public holeContours: Point2[][]
    ) {
    }

    static createTest2D(): StaticTerrainConfiguration {
        return new StaticTerrainConfiguration(
            [
                PathsCalculator.rect(0, 0, 1000, 1000)
            ], [
                PathsCalculator.rect(100, 100, 300, 300),
                PathsCalculator.rect(400, 200, 100, 100),
                PathsCalculator.rect(200, -50, 100, 150),
                PathsCalculator.rect(600, 600, 300, 300),
                PathsCalculator.rect(700, 500, 100, 100),
                PathsCalculator.rect(200, 700, 100, 100),
                PathsCalculator.rect(600, 100, 300, 50),
                PathsCalculator.rect(600, 150, 50, 200),
                PathsCalculator.rect(850, 150, 50, 200),
                PathsCalculator.rect(600, 350, 300, 50),
                PathsCalculator.rect(700, 200, 100, 100)
            ]
        );
    }

    static createHorizontalStripes2D(w: number, h: number): StaticTerrainConfiguration {
        if (w < h) throw new Error('w < h');

        return new StaticTerrainConfiguration(
            [
                PathsCalculator.rect(0, 0, w, h)
            ], [
                PathsCalculator.rect(h / 7, h / 7, w - 2 * h / 7, h / 7),
                PathsCalculator.rect(2 * h / 7, 3 * h / 7, w - 4 * h / 7, h / 7),
                PathsCalculator.rect(h / 7, 5 * h / 7, w - 2 * h / 7, h / 7)
            ]
        );
    }
}

type PathIntermediate = { prior: number, current: number, totalCost: number };
type PathLink = { priorIndex: number, cheapestCost: number }

function anySegmentIntersects(query: Segment2, segments: Segment2[]) {
    return engine.any(segments, (s: Segment2) => engine.tryFindSegmentSegmentIntersectionT(query, s) !== null);
}

export class LocalPathfinder {
    constructor (private terrainView: ErodedTerrainView) {}

    public computePath(source: Point2, destination: Point2): Point2[] {
        const terrainView = this.terrainView;

        if (!anySegmentIntersects([source, destination], terrainView.barriers)) {
            return [source, destination];
        }

        const results = terrainView.waypoints.concat([0, 0]).map(_ => ({ priorIndex: -1, cheapestCost: Infinity }));
        const sourceWaypointIndex = terrainView.waypoints.length;
        const destinationWaypointIndex = terrainView.waypoints.length + 1;

        const pq = new PriorityQueue<PathIntermediate>((a, b) => Math.sign(b.totalCost - a.totalCost));
        engine.enumerate(terrainView.waypoints)
            .filter(([wi, p]) => !anySegmentIntersects([source, p], terrainView.barriers))
            .map(([wi, p]) => ({ prior: sourceWaypointIndex, current: wi, totalCost: engine.dist(source, p) }))
            .forEach(intermediate => pq.enqueue(intermediate));

        while (!pq.isEmpty()) {
            const x = pq.dequeue();
            if (results[x.current].priorIndex !== -1) continue;

            // Mark waypoint as visited
            results[x.current].priorIndex = x.prior;
            results[x.current].cheapestCost = x.totalCost;

            if (x.current === destinationWaypointIndex) {
                const path = [destination];
                let currentWaypointIndex = x.prior;
                while (currentWaypointIndex !== sourceWaypointIndex) {
                    path.unshift(terrainView.waypoints[currentWaypointIndex]);
                    currentWaypointIndex = results[currentWaypointIndex].priorIndex;
                }
                path.unshift(source);
                return path;
            }

            // schedule neighbor visits.
            const edges = terrainView.edgesByWaypointIndex[x.current];

            for (let i = 0; i < edges.length; i++) {
                const edge = edges[i];
                const nextTotalCost = x.totalCost + edge.cost;
                if (nextTotalCost >= results[edge.destinationWaypointIndex].cheapestCost) {
                    continue;
                }
                results[edge.destinationWaypointIndex].cheapestCost = nextTotalCost;
                pq.enqueue({
                    prior: x.current,
                    current: edge.destinationWaypointIndex,
                    totalCost: nextTotalCost
                });
            }

            // Including potential visit to exit
            if (!anySegmentIntersects([terrainView.waypoints[x.current], destination], terrainView.barriers)) {
                pq.enqueue({
                    prior: x.current,
                    current: destinationWaypointIndex,
                    totalCost: x.totalCost + engine.dist(terrainView.waypoints[x.current], destination)
                });
            }
        }

        return null;
    }
}

export type VisibilityGraphEdge = {
    sourceWaypointIndex: number;
    destinationWaypointIndex: number;
    cost: number;
};

export class ErodedTerrainView {
    // dilation to move holes inward
    static kBarrierDilationFactor: number = 5;

    // expansion to make corners hit
    static kBarrierExpansionFactor: number = 2;

    constructor(
        public staticTerrainConfiguration: StaticTerrainConfiguration,
        public punchedLand: ClipperLib.PolyTree,
        public barriers: Segment2[],
        public waypoints: Point2[],
        public edgesByWaypointIndex: VisibilityGraphEdge[][]
    ) {
    }

    public static build(staticTerrainConfiguration: StaticTerrainConfiguration, temporaryHoles: Point2[][], agentRadius: number): ErodedTerrainView {
        const punchedLand = PolygonOperations.punch()
            .includePaths(staticTerrainConfiguration.landContours.map(c => c.map(PointConversion.b2c)))
            .excludePaths(staticTerrainConfiguration.holeContours.map(c => c.map(PointConversion.b2c)))
            .excludePaths(temporaryHoles.map(c => c.map(PointConversion.b2c)))
            .execute(-agentRadius);

        const barriers = engine.mapMany(
            PolygonOperations.enumerateLandPolyNodes(punchedLand),
            ErodedTerrainView.convertLandPolyNodeToBarriers);

        const waypoints = engine.mapMany(
            PolygonOperations.enumeratePolyNodes(punchedLand),
            ErodedTerrainView.convertPolyNodeToWaypoints
        );

        const edgesByWaypointIndex = engine.enumerate(waypoints)
            .map(([wia, a]) => engine.enumerate(waypoints)
                .filter(([wib, b]) => wia !== wib && !anySegmentIntersects([a, b], barriers))
                .map(([wib, b]) => ({
                    sourceWaypointIndex: wia,
                    destinationWaypointIndex: wib,
                    cost: engine.dist(a, b)
                }))
            );
        return new ErodedTerrainView(staticTerrainConfiguration, punchedLand, barriers, waypoints, edgesByWaypointIndex);
    }

    private static convertLandPolyNodeToBarriers(landNode: ClipperLib.PolyNode): Segment2[] {
        const dilatedNodeAndChildrenPolytree = PolygonOperations.offset()
            .includePath(landNode.Contour())
            .includePaths(landNode.Childs().map(c => c.Contour()))
            .dilate(ErodedTerrainView.kBarrierDilationFactor)
            .execute();

        return engine.mapMany(
            PolygonOperations.enumeratePolyNodes(dilatedNodeAndChildrenPolytree),
            PolygonOperations.enumerateContourSegments
        ).map(s => engine.offsetSegment(s, ErodedTerrainView.kBarrierExpansionFactor));
    }

    private static convertPolyNodeToWaypoints(node: ClipperLib.PolyNode): Point2[] {
        const results: Point2[] = [];
        const contour = node.Contour();
        if (contour.length === 0) return results;

        const contourIsOpen = contour[0].X !== contour[contour.length - 1].X || contour[0].Y !== contour[contour.length - 1].Y;
        const pointCount = contourIsOpen ? contour.length : contour.length - 1;

        for (let i = 0; i < pointCount; i++) {
            const a = contour[i];
            const b = contour[(i + 1) % pointCount];
            const c = contour[(i + 2) % pointCount];

            var clockness = engine.clockness(a.X, a.Y, b.X, b.Y, c.X, c.Y);
            if (clockness === Clockness.counterClockwise) results.push(PointConversion.c2b(b));
        }
        return results;
    }
}

export class UnionOperation {
    private clipper: ClipperLib.Clipper = new ClipperLib.Clipper(ClipperLib.Clipper.ioStrictlySimple);

    public includePath (path: ClipperLib.Path): UnionOperation {
        this.clipper.AddPath(path, ClipperLib.PolyType.ptSubject, true);
        return this;
    }

    public includePaths (paths: ClipperLib.Paths): UnionOperation {
        this.clipper.AddPaths(paths, ClipperLib.PolyType.ptSubject, true);
        return this;
    }

    public execute(): ClipperLib.PolyTree {
        const res = new ClipperLib.PolyTree();
        this.clipper.Execute(ClipperLib.ClipType.ctUnion, res, ClipperLib.PolyFillType.pftPositive, ClipperLib.PolyFillType.pftPositive);
        return res;
    }
}

export class PunchOperation {
    private clipper: ClipperLib.Clipper = new ClipperLib.Clipper(ClipperLib.Clipper.ioStrictlySimple);

    public includePath(path: ClipperLib.Path): PunchOperation {
        this.clipper.AddPath(path, ClipperLib.PolyType.ptSubject, true);
        return this;
    }

    public includePaths(paths: ClipperLib.Paths): PunchOperation {
        this.clipper.AddPaths(paths, ClipperLib.PolyType.ptSubject, true);
        return this;
    }

    public excludePath(path: ClipperLib.Path): PunchOperation {
        this.clipper.AddPath(path, ClipperLib.PolyType.ptClip, true);
        return this;
    }

    public excludePaths(paths: ClipperLib.Paths): PunchOperation {
        this.clipper.AddPaths(paths, ClipperLib.PolyType.ptClip, true);
        return this;
    }

    public execute(additionalErosionDilation: number = 0.05): ClipperLib.PolyTree {
        const polyTree = new ClipperLib.PolyTree();
        this.clipper.Execute(ClipperLib.ClipType.ctDifference, polyTree, ClipperLib.PolyFillType.pftPositive, ClipperLib.PolyFillType.pftPositive);

        // Used to remove degeneracies where additionalErosion is 0.
        const baseErosion = 0.05;
        return PolygonOperations.offset().includePaths(PolygonOperations.flattenToContours(polyTree))
            .erode(baseErosion)
            .dilate(baseErosion)
            .erodeOrDilate(additionalErosionDilation)
            .erode(baseErosion)
            .dilate(baseErosion)
            .execute();
    }
}

export class OffsetOperation {
    private includedContours: ClipperLib.Path[] = [];
    private offsets: number[] = [];

    /**
     * @param delta Positive dilates, negative erodes
     */
    public erodeOrDilate(delta: number): OffsetOperation {
        this.offsets.push(delta);
        return this;
    }

    public erode(delta: number): OffsetOperation {
        if (delta < 0) {
            throw new Error("delta wasn't negative");
        }

        this.offsets.push(-delta);
        return this;
    }

    public dilate(delta: number): OffsetOperation {
        if (delta < 0) {
            throw new Error("delta wasn't negative");
        }

        this.offsets.push(delta);
        return this;
    }

    public includePath(path: ClipperLib.Path): OffsetOperation {
        this.includedContours.push(path);
        return this;
    }

    public includePaths(paths: ClipperLib.Paths): OffsetOperation {
        paths.forEach(path => this.includePath(path));
        return this;
    }

    public execute(): ClipperLib.PolyTree {
        let currentContours = this.includedContours;
        for (let i = 0; i < this.offsets.length; i++) {
            var polytree = new ClipperLib.PolyTree();
            var clipper = new ClipperLib.ClipperOffset();
            currentContours.forEach(contour => {
                clipper.AddPath(contour, ClipperLib.JoinType.jtMiter, ClipperLib.EndType.etClosedPolygon);
            });
            clipper.Execute(polytree, this.offsets[i]);
            if (i + 1 == this.offsets.length) {
                return polytree;
            } else {
                currentContours = PolygonOperations.flattenToContours(polytree);
            }
        }
        throw new Error('No offseting performed?');
    }
}

export class PolygonOperations {
    public static union(): UnionOperation { return new UnionOperation(); }
    public static punch(): PunchOperation { return new PunchOperation(); }
    public static offset(): OffsetOperation { return new OffsetOperation(); }
    public static cleanPolygons(): UnionOperation { return new UnionOperation(); }

    public static flattenToContours(polynode: ClipperLib.PolyNode, includeOuterPolygon: boolean = true): ClipperLib.Paths {
         var results: ClipperLib.Path[] = [];
         var depthFilter = includeOuterPolygon ? 0 : 2; // 2 for outer void level and outer land poly level
         PolygonOperations.flattenToContoursHelper(polynode, polynode.IsHoleNode(), results, depthFilter);
         return results;
      }

    private static flattenToContoursHelper(current: ClipperLib.PolyNode, isHole: boolean, results: ClipperLib.Paths, depthFilter: number): void {
        if (current.Contour().length > 0 && depthFilter <= 0) {
            results.push(current.Contour());
        }
        current.Childs().forEach(child => {
            // We avoid node.isHole as that traverses upwards recursively and wastefully.
            PolygonOperations.flattenToContoursHelper(child, !isHole, results, depthFilter - 1);
        });
    }

    public static enumeratePolyNodes(polytree: ClipperLib.PolyTree): ClipperLib.PolyNode[] {
        const res: ClipperLib.PolyNode[] = [];

        function helper(pn: ClipperLib.PolyNode) {
            res.push(pn);
            pn.Childs().forEach(helper);
        }

        helper(polytree);

        return res;
    }

    public static enumerateLandPolyNodes(polytree: ClipperLib.PolyTree): ClipperLib.PolyNode[] {
        const res: ClipperLib.PolyNode[] = [];
        const s = polytree.IsHoleNode() ? polytree.Childs().concat([]) : [polytree];
        while (s.length !== 0) {
            const landNode = s.shift();
            res.push(landNode);
            landNode.Childs().forEach(c => c.Childs().forEach(ln => s.push(ln)));
        }
        return res;
    }

    public static enumerateContourSegments(node: ClipperLib.PolyNode): Segment2[] {
        const contour = node.Contour();
        const results: Segment2[] = [];
        for (var i = 0; i < contour.length; i++) {
            results.push([
                PointConversion.c2b(contour[i]),
                PointConversion.c2b(contour[(i + 1) % contour.length])
            ]);
        }
        return results;
    }
}

export class PointConversion {
    public static b2c(p: Point2): ClipperLib.IntPoint {
        return new ClipperLib.IntPoint(p[0], p[1]);
    }

    public static c2b(p: ClipperLib.IntPoint): Point2 {
        return [p.X, p.Y];
    }

    public static b2p(p: Point2): P2TPoint {
        return new P2TPoint(p[0], p[1]);
    }

    public static p2b(p: P2TPoint): Point2 {
        return [p.x, p.y];
    }


    public static c2p(p: ClipperLib.IntPoint): P2TPoint {
        return new P2TPoint(p.X, p.Y);
    }
    
    public static p2c(p: P2TPoint): ClipperLib.IntPoint {
        return new ClipperLib.IntPoint(p.x, p.y);
    }
}

export class PathsCalculator {
    // todo: why must this be flipped compared to desktop code? (Clipper port bug?)
    public static rect(x: number, y: number, width: number, height: number): Point2[] {
        return [
            [x, y],
            [x + width, y],
            [x + width, y + height],
            [x, y + height],
            [x, y]
        ];
    }
}

export class ErodedTerrainViewCalculator {
    public computeErodedView(config: StaticTerrainConfiguration, agentRadius: number) {
        const clipper = new ClipperLib.Clipper();
//        ClipperLib.Paths
    }
}

