import qh from 'quickhull3d';

type Point3 = number[];
const e: BoilerplateEngine = window;
const enumerate = e.enumerate;
const zoom = 1.5;
const Key: Key = window.Key;

export class GraphDemo {
    starts: Point3[];
    points: Point3[];
    dest1: Point3[];
    dest2: Point3[];
    highlights: number[][];

    offscreenRenderContext: CanvasRenderingContext2D;

    constructor() {
        this.offscreenRenderContext = e.createDisplaySizedRenderContext();
        this.highlights = enumerate(3).map(i => [i, 0]);
        this.resetPoints();
    }

    resetPoints () {
        // world is unit cube
        const n = 24;
        this.starts = enumerate(n).map(() => this.randomSpherePoint(0, 0, 0, 1));
        this.points = this.starts.map(p => p.map(v => v));
        this.dest1 = enumerate(n).map(() => this.randomSpherePoint(0, 0, 0, 1));
        this.dest2 = enumerate(n).map(() => this.randomSpherePoint(0, 0, 0, 1));
    }

    tick (dt: number, t: number) {
        for (var i = 0; i < this.points.length; i++) {
            const p = this.points[i];
            const d1 = this.dest1[i];
            const d2 = this.dest2[i];

            const distPd1 = e.dist(p, d1);
            const distPd2 = e.dist(p, d2);
            const d2Strength = 0.5 * (distPd2 / (distPd1 + distPd2));
            const delta = e.lerp(e.normalize(e.sub(d1, p)), e.normalize(e.sub(d2, p)), d2Strength);

            if (distPd1 < 0.1) {
                this.starts[i] = p.map(v => v);
                this.dest1[i] = d2;
                this.dest2[i] = this.randomSpherePoint(0, 0, 0, 1);
            }

            this.points[i] = e.add(p, e.mul(delta, 0.1 * dt));
        }
    }

    render(dt: number, t: number) {
        if (Key.isDown('r') && (t % 0.7) < 0.1) this.resetPoints();

        const screenRect = e.getScreenRect();
        e.clear();
        e.setCompositeOperation('hard-light');

        const oscillatePoint = (world: Point3): Point3 => {
            const oscillate = 2;
            return [
                world[0] + oscillate * 0.006 * Math.sin(1.0 * t + world[1] * 4.0 + world[2] * 2.3)
                + oscillate * 0.010 * Math.sin(0.2 * t + world[1] * 2.7 + world[2] * 3.0),
                world[1] + oscillate * 0.012 * Math.sin(0.8 * t + world[2] * 4.0 + world[0] * 2.3)
                + oscillate * 0.014 * Math.sin(0.3 * t + world[2] * 2.7 + world[0] * 3.0),
                world[2] + oscillate * 0.01 * Math.sin(0.5 * t + world[0] * 4.0 + world[1] * 2.3)
                + oscillate * 0.01 * Math.sin(0.2 * t + world[0] * 2.7 + world[1] * 3.0)
            ];
        }

        const pointToScale = (world: Point3) => {
            const dist = (world[2] + 1) / 2; // 0 = near, 1 = far
            return (1 - dist) * 0.9 + 0.1;
        }

        const pointToScreen = (world: Point3) => {
            const scale = pointToScale(world);
            const smallerDimension = Math.min(screenRect.width, screenRect.height);
            const screenScale = [smallerDimension, smallerDimension];
            const screenOffset = e.mul(e.sub([screenRect.width, screenRect.height], screenScale), 0.5);
            return e.add(screenOffset, e.cmul(screenScale, [
                (world[0] * scale * zoom + 1) / 2,
                (world[1] * scale * zoom + 1) / 2
            ]));
        }

        const pointToScreenRect = (world: Point3) => {
            const scale = pointToScale(world);
            const center = pointToScreen(world);
            const pointScale = 5;
            return e.makeRectangle(center[0] - pointScale * scale, center[1] - pointScale * scale, pointScale * 2 * scale, pointScale * 2 * scale);
        };

        const oscillatedPoints = this.points.map(oscillatePoint);
        const screenPoints = oscillatedPoints.map(pointToScreen);
        const screenRects = oscillatedPoints.map(pointToScreenRect);
        const alphas = oscillatedPoints.map(p => Math.pow(pointToScale(p), 2) * 0.38 + 0.02);

        const renderedEdges: {[x: number]: boolean} = {};
        const renderEdge = (i: number, j: number) => {
            const n1 = i * (this.points.length * this.points.length) + j;
            const n2 = j * (this.points.length * this.points.length) + i;
            if (renderedEdges[n1] || renderedEdges[n2]) return;
            renderedEdges[n1] = renderedEdges[n2] = true;

            const p1 = screenPoints[i];
            const p2 = screenPoints[j];
            const r1 = screenRects[i];
            const r2 = screenRects[j];
            const perp = e.normalize(e.perp(e.sub(p2, p1)));
            const perp1 = e.mul(perp, 0.25 * r1.width / 2);
            const perp2 = e.mul(perp, 0.25 * r2.width / 2);
            const poly = [
                e.add(p1, perp1),
                e.sub(p1, perp1),
                e.sub(p2, perp2),
                e.add(p2, perp2)
            ];
            const stroke = e.createLinearGradient(p1, p2, `rgba(255, 255, 255, ${alphas[i] * 2})`, `rgba(255, 255, 255, ${alphas[j] * 2})`);
            e.fillPoly(stroke, poly);
//            e.drawLine(stroke, p1, p2);
//            e.fillPoly('#FFFFFF', poly);
        }

        const hull = qh(oscillatedPoints);
//        for (var i = 0; i < oscillatedPoints.length; i++) {
//            for (var j = i + 1; j < oscillatedPoints.length; j++) {
//                if (e.dist(this.points[i], this.points[j]) > 1) continue;
//                renderEdge(i, j);
//            }
//        }

        hull.forEach(([i1, i2, i3]) => {
            renderEdge(i1, i2);
            renderEdge(i2, i3);
            renderEdge(i3, i1);
        });

        this.highlights = this.highlights.map(([i, t]) => {
            if (i >= hull.length || t - dt < 0) {
                i = e.randomInt(0, hull.length);
                t = Math.random() * 2 + 0.2;
            }

            const alpha = t > 1 ? 0 : e.lerp(0, 0.08, t);
            const highlightTriangle = hull[i].map(ind => screenPoints[ind]);
             e.fillPoly(`rgba(255, 255, 255, ${alpha})`, highlightTriangle);
            return [i, t - dt];
        });

//        e.setCompositeOperation('source-over');
//        screenRects.forEach(rect => e.fillEllipse(bg, rect));

        e.activeContext.fillStyle = '#FFFFFF';
        e.activeContext.beginPath();
        e.zip(screenRects, alphas, (rect: Rect, alpha: number) => {
            const r = rect.width / 2;
            e.activeContext.ellipse(rect.x + r, rect.y + r, r, r, 0, 0, 2 * Math.PI);
            e.activeContext.closePath();
        });
        e.activeContext.fill();
//        e.zip(screenRects, alphas, (rect: Rect, alpha: number) => e.fillEllipse(`rgba(255, 255, 255, 255)`, rect));

//        e.swapActiveRenderContext(screenContext);
//        e.setCompositeOperation('source-over');
//        e.clear('#FFFFFF');
//        e.setCompositeOperation('color-burn');
//        screenContext.drawImage(this.offscreenRenderContext.canvas, 0, 0, this.offscreenRenderContext.canvas.width, this.offscreenRenderContext.canvas.height);

        /*
            // e.drawLine('#FFFFFF', e.sub(p, [0, 3]), e.add(p, [0, 3]))
            // e.drawLine('#FFFFFF', e.sub(p, [3, 0]), e.add(p, [3, 0]))

            e.setCompositeOperation('source-over');
            const start = pointToScreen(this.starts[i]);
            const d1 = pointToScreen(this.dest1[i]);
            const d2 = pointToScreen(this.dest2[i]);
            // e.drawLine("rgba(255, 0, 0, 0.25)", p, start);
            // e.drawLine("rgba(0, 255, 0, 0.25)", p, d1);
            // e.drawLine("rgba(0, 0, 255, 0.25)", p, d2);
        */
    }

    randomUnitCubePoint() {
        return [
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1
        ]
    }

    /*
    Returns a random point of a sphere, evenly distributed over the sphere.
    The sphere is centered at (x0,y0,z0) with the passed in radius.
    The returned point is returned as a three element array [x,y,z].
    */
    randomSpherePoint(x0: number, y0: number, z0: number, radius: number) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
        const y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
        const z = z0 + (radius * Math.cos(phi));
        return [x, y, z];
    }
}