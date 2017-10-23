// Based on https://sourceforge.net/p/jsclipper/wiki/Home%206/
declare namespace ClipperLib {
    export class IntPoint {
        X: number;
        Y: number;

        constructor(x: number, y: number);
    }

    export type Path = IntPoint[];
    export type Paths = Path[];

    export enum ClipType {
        ctIntersection,
        ctUnion,
        ctDifference,
        ctXor,
    }

    export enum PolyType {
        ptSubject,
        ptClip
    }

    export enum PolyFillType {
        pftEvenOdd,
        pftNonZero,
        pftPositive,
        pftNegative
    }

    export class Clipper {
        static ioReverseSolution: number;
        static ioStrictlySimple: number;
        static ioPreserveCollinear: number;

        constructor(inputOptions?: number);

        public AddPath(path: Path, polyType: PolyType, closed: boolean): void;
        public AddPaths(paths: Paths, polyType: PolyType, closed: boolean): void;
        public Execute(clipType: ClipType, solutionPaths: Paths | PolyTree, subjectFillType: PolyFillType, clipFillType: PolyFillType): boolean;

        public static SimplifyPolygons(paths: Paths, polyFillType: PolyFillType): void;
    }

    namespace JS {
        export function ScaleUpPath(path: Path, scale: number): Path;
        export function ScaleUpPaths(paths: Paths, scale: number): Paths;
        export function Clean(paths: Paths, scale: number): Paths;
        export function CleanPolygon(path: Path, scale: number): Path;
        export function CleanPolygons(paths: Paths, scale: number): Paths;
    }

    export enum JoinType {
        jtRound,
        jtMiter
    }

    export enum EndType {
        etClosedPolygon
    }

    export class PolyNode {
        public Contour() : Path;
        public Childs(): PolyNode[];
        public Parent(): PolyNode;
        public IsHoleNode(): boolean;
    }

    export class PolyTree extends PolyNode {
        constructor();
    }

    export class ClipperOffset {
        constructor(miterLimit?: number, arcTolerance?: number);

        public AddPath(path: Path, joinType: JoinType, endType: EndType): void;
        public AddPaths(paths: Paths, joinType: JoinType, endType: EndType): void;
        
        public Execute(result: Paths | PolyTree, delta: number);
    }
}