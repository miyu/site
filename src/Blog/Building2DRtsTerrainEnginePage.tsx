import { IPage } from '../Core';
import { ColorManager, ColorSchemes } from '../ColorManager';
import { PathsCalculator, StaticTerrainConfiguration, RtsRenderConfiguration, RtsSimulationState, RtsSimulationRenderer } from '../Rts/TriangulationView';

import './base.scss';
import './blog0.scss';

const engine: BoilerplateEngine = window;

export class Building2DRtsTerrainEnginePage implements IPage {
    introRenderTarget: HTMLCanvasElement;
    introRenderContext: CanvasRenderingContext2D;

    constructor(private colorManager: ColorManager) {
        this.introRenderTarget = <canvas className='inline intro-rt'></canvas> as HTMLCanvasElement;
        this.introRenderContext = this.introRenderTarget.getContext('2d');
    }

    async fetchContentAsync(): Promise<HTMLElement> {
        const displayNone = { display: 'none' };
        return (
            <article className='blog-article blog0'>
                <header id="intro-header">
                    <aside className='inline warning'>
                        <p>Note: This blog is heavily a work-in-progress and incomplete.</p>
                        <p>It also fills your browser width, so make the window smaller if words are too big :P</p>
                    </aside>
                    <h1>Building a 2D RTS Terrain Engine</h1>
                    <p>
                        Let's build a 2D RTS Terrain engine! 
                    </p>
                    <p>
                        In doing so, we'll touch Computational Geometry (Polygon Clipping, Minkowski Sums, Visibility)
                        and Robotics/AI (Motion Planning, Pathfinding, Flocking). It'll be a fun journey!
                    </p>
                    <aside class='inline emphasis'>
                        <p>
                            Sample code is available in C# and TypeScript. Libraries leveraged are Clipper and Poly2Tri,
                            which have been conveniently ported to most programming languages.
                        </p>
                        <p>
                            If you have questions, message me on Twitter at @WartyTheNerd.
                        </p>
                    </aside>

                    <h2>Table of Contents</h2>
                    <ol className='table-of-contents'>
                        <li><a href="#introduction">Introduction</a>
                            <ol>
                                <li>Requirements</li>
                                <li>Design</li>
                            </ol>
                        </li>
                        <li><a href="#representing-terrain">Representing Terrain: Navigation Meshes and Polygon Clipping</a></li>
                        <li><a href="#finding-paths">Finding Paths: Dijkstras on Visibility Graphs</a></li>
                        <li>(Coming Soon) Moving Units: Agent Radiuses and Wall-Pushing</li>
                        <li>(Coming Soon) Moving Swarms: Flocking Heuristics</li>
                    </ol>
                    {this.introRenderTarget}
                </header>
                <section id="introduction">
                    <h1>Introduction</h1>
                    <p>
                        Before beginning, you should know what games in the Multiplayer Online Battle Arena (MOBA) and 
                        Real-Time Strategy (RTS) genres looks like. If so, congratulations; your time wasting has paid off.
                        If not, do some "research" on YouTube. 
                    </p>
                    <p>
                        Now then, let's spec out our terrain engine's high-level requirements and design.
                    </p>

                    <section>
                        <h1>Requirements</h1>

                        <h2>Functionality</h2>
                        <p>
                            We need these features to mimic a modern MOBA/RTS's movement mechanics:
                        </p>
                        <table>
                            <thead><td>Feature</td><td>Description</td></thead>
                            <tr><td>Pathing</td><td>Moving variable-radius units between locations</td></tr>
                            <tr><td>Knock-Back</td><td>Pushing units in a certain direction</td></tr>
                            <tr><td>Walling</td><td>Introducing impassable obstacles into the game map</td></tr>
                            <tr><td>Blinking</td><td>Teleporting units to locations and resolving out-of-bounds</td></tr>
                            <tr><td>Unit Collision</td><td>Preventing variable-radius unit overlap, creep blocking</td></tr>
                        </table>

                        <h2>Optimality</h2>
                        <p>
                            Pathfinders of competitive MOBAs and RTSes must achieve optimality. It would be unacceptable
                            to players if agents (in-game units) followed clearly suboptimal paths. From my experience,
                            this optimality requirement is the hardest design constraint faced in building a terrain
                            engine; so hard, in fact, that we will begin by solving the pathfinding problem, then
                            work backwards to a complete engine.
                        </p>

                        <h2>Robustness</h2>
                        <p>
                            If you've ever used a path-based image editor, you've probably encountered issues of computational
                            robustness where a tool (e.g. path unioning) worked happily on one input, only to fail dismally
                            on the next.
                        </p>
                        <p>
                            This can happen in our engine! For example, we'll triangulate polygons (read: turn polygons into triangles)
                            when we implement flocking behaviors, and polygon triangulators must overcome a plethora of edge-cases
                            to avoid yielding garbage output. See below, where I've visualized my own triangulator failing on a
                            degenerate edge-case.
                        </p>
                        <table className='half-split'>
                            <thead><td>Successful Triangulation</td><td>Unsuccessful Triangulation</td></thead>
                            <tr>
                                <td><div className='img-wrap contain'><img src="/assets/voronoi/result.gif" /></div></td>
                                <td><div className='img-wrap'><img src="/assets/voronoi/nonrobust.gif" /></div></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    Visualized: Execution of Fortune's Algorithm. <a href="https://github.com/miyu/voronoi">[Source]</a><br />
                                </td>
                            </tr>
                        </table>
                        <p>
                            For the most part, these failures mean the rest of our code making wild decisions based on corrupt data.
                            We won't dive too deeply into these issues, though I'll leave notes here and there.
                        </p>


                        <h2>Performance</h2>
                        <p>
                            Our system needs to be performant. After all, our terrain engine owns the underlying physical representation
                            of our game, games face various realtimeness constraints, and we'd prefer our game servers be
                            fast enough to support thousands of concurrent games and users at once per server box, running at 60 game ticks
                            per second.
                        </p>

                        <aside class='inline emphasis'>
                            <p>
                                For brevity, we will largely gloss over performance and robustness in this blog; our goal is to build the
                                conceptual understanding necessary to craft a terrain engine and, from there, dive into such optimizations.
                            </p>
                            <p>
                                I should note that the implementation-level performance or robustness issues we face are
                                just that: implementation-level. That is to say, the approach I outline reflects the
                                approach I take in my real C# server implementation which does not suffer from
                                such issues.
                            </p>
                        </aside>
                    </section>
                    <section>
                        <h1>Design</h1>
                        <p>
                            At the high level, we need to solve three main subproblems:
                        </p>
                        <ol>
                            <li>Representing Terrain: How do we represent our game world's terrain and obstacles?</li>
                            <li>Pathfinding: How do we find paths between points in our game world?</li>
                            <li>Flocking: How do we efficiently move swarms of units in our game world?</li>
                        </ol>
                        <p>
                            These problems can be solved sequentially and each map to a subsystem of our terrain engine. 
                            We'll implement additional features (e.g. knockback, hole introduction) toward the end.
                        </p>

                        <aside class='inline emphasis'>
                            <p>
                                I'm ashamed to say this blog prescribes solutions to the above sub-problems without 
                                analyzing their comparative trade-offs with alternative solutions. 
                            </p>
                        </aside>
                    </section>
                </section>
                <section id="representing-terrain">
                    <h1>Representing Terrain: Polygonal Maps and Polygon Clipping</h1>
                    <p>
                        I've primarily seen three ways of representing terrain in games with pathfinding:
                    </p>
                    <ol>
                        <li><a href="http://www.redblobgames.com/pathfinding/tower-defense/">Grids (and variations with hierarchy or e.g. hexagonal cell shape)</a></li>
                        <li><a href="https://web.archive.org/web/20110710062039/http://developer.valvesoftware.com/wiki/Navigation_Meshes">Navigation Mesh (e.g. for Counter-Strike Source bots)</a> (<a href="https://web.archive.org/web/20110723003329/http://www.ai-blog.net/archives/000152.html">See Also</a>)</li>
                        <li><a href="http://theory.stanford.edu/~amitp/GameProgramming/MapRepresentations.html#polygonal-maps">Polygonal Map</a></li>
                    </ol>
                    <p>
                        Our engine takes the Polygonal Map-based approach. In practice, this means representing a map as a tree of alternating hole/land polygons; a hierarchical polygon tree, if you will.
                    </p>
                    <p>
                        We'll leverage a Polygon Clipping library, which allows us to union, intersect, and subtract polygons from each other. 
                    </p>
                </section>
                <section id="finding-paths">
                    <h1>Finding Paths: Dijkstras on Visibility Graphs</h1>
                    <p>
                        We begin by introducing the Shortest Path Problem (SPP).
                    </p>
                    <aside className='inline algorithm'>
                        <h1>Shortest Path Problem</h1>
                        <section>
                            <dl>
                                <dt>Given</dt>
                                <dd>G = (V, E) -- Graph G consisting of Vertex Set V and Edge Set E</dd>
                                <dd>s &isin; V &nbsp;&nbsp;&nbsp;&nbsp; -- A start point s which is an element in V</dd>
                                <dd>t &isin; V &nbsp;&nbsp;&nbsp;&nbsp; -- An end point t which is an element in V</dd>
                                <dd>c(a, b) &nbsp;&nbsp; -- A cost function c for the edge (a, b) from vertex a to b.</dd>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (&infin; if edge does not exist.)</dd>

                                <dt>Compute</dt>
                                <dd>P = (p<sub>1</sub>, p<sub>2</sub>, &#8229;, p<sub>n</sub>) -- Our output path's vertices<br />
                                    s.t. p<sub>1</sub> = s -- Such that the path starts at our start point s<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp; p<sub>n</sub> = t -- The path ends at our end point t<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp; for 1&le;i&le;n, p<sub>i</sub> &isin; V -- Path vertices are in V<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp; for 1&le;i&lt;n, (p<sub>i</sub>, p<sub>i+1</sub>) &isin; E -- The path follows edges.<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp; c(P) is minimized.
                                        </dd>

                                <dt>tl;dr we want to build</dt>
                                <dd>fn shortestPath(g: &#123; V: Vert[], E: Edge[] &#125;, start: Vert, end: Vert): Vert[];</dd>
                            </dl>
                        </section>
                    </aside>
                </section>
            </article>
        );
    }

    mounted(): void {
        window.document.title = 'Building a 2D Rts Terrain Engine';

        this.colorManager.push(ColorSchemes.whiteColorScheme);
        this.handleResize();
    }

    tick(dt: number, t: number): void {
    }

    render(dt: number, t: number): void {
        this.renderIntro(dt, t);
    }

    renderIntro(dt: number, t: number): void {
        const oldContext = engine.swapActiveRenderContext(this.introRenderContext);

        const cw = this.introRenderTarget.clientWidth;
        const ch = this.introRenderTarget.clientHeight;
        const padding = cw * 0.02;
        const w = cw - padding * 2;
        const h = ch - padding * 2;
        
        const obstacles: Point2[][] = [];
        const obstaclesPerSecond = 8;
        const obstacleMinLifetime = 1;
        const obstacleMaxLifetime = 20;
        const tClamped = Math.floor(t * obstaclesPerSecond);
        for (var tFaked = tClamped - obstacleMaxLifetime * obstaclesPerSecond; tFaked < tClamped; tFaked++) {
            const rng = new RNG(tFaked.toString());
            const tDisappears = tFaked + rng.random(obstacleMinLifetime * obstaclesPerSecond, obstacleMaxLifetime * obstaclesPerSecond);
            if (tDisappears >= tClamped) continue;
            const sample = (low: number, high: number) => low + rng.uniform() * (high - low);
            const ow = sample(w / 20, w / 10) * 0.5;
            const oh = sample(w / 20, w / 10) * 0.5;
            obstacles.push(PathsCalculator.rect(sample(-padding, w + padding - ow), sample(-padding, h + padding - oh), ow, oh));
        }

        const state = {
            staticTerrainConfiguration: StaticTerrainConfiguration.createHorizontalStripes2D(w, h),
            temporaryHoles: obstacles
        } as RtsSimulationState;

        const pathfindingQueries: [Point2, Point2][] = [];
        const nPoints = 8;
        for (let i = 0; i < nPoints; i++) {
            const y = h * (0.5 + 4 * i / (nPoints - 1)) / 5;
            pathfindingQueries.push([[padding, y], [w - padding, y]]);
        };

        const config = {
            renderTransform: (p: Point2) => engine.add([padding, padding], p),
            pathfindingQueries,
            agentRadius: padding / 4,
//            enableRenderPolyTree: true,
//            enableRenderBarriers: true,
            triangulationFillStyle: 'rgba(240, 240, 240, 1)',
//            triangulationStrokeStyle: 'rgba(0, 0, 0, 0.05)',
            temporaryHoleFillStyle: 'rgba(255, 255, 255, 1)',
            temporaryHoleStrokeStyle: 'rgba(22, 22, 22, 1)',
        } as RtsRenderConfiguration;

        const renderer = new RtsSimulationRenderer(state);
        renderer.render(config);

        engine.swapActiveRenderContext(oldContext);
    }

    handleResize(): void {
        this.introRenderTarget.width = this.introRenderTarget.clientWidth;
        this.introRenderTarget.height = this.introRenderTarget.clientHeight;
    }
}