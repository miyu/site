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
        return (
            <article className='blog-article blog0'>
                <header id="intro-header">
                    <h1>Building a 2D RTS Terrain Engine</h1>
                    <p>
                        In this article we'll roll our own 2D RTS terrain engine. 
                    </p>
                    {this.introRenderTarget}
                    <p>
                        We'll begin by speccing out our pathfinding engine's functional requirements.
                        Then, we'll talk design and break our larger system into subproblems.
                        Finally, we'll run through my implementation and end with final notes and an interactive demo.
                    </p>
                    <p>
                        I hope my article conveys elegance rather than complexity in
                        its solution, leaving you confident in your ability to
                        craft your own. 
                        
                        Without further ado, let's begin.
                    </p>
                </header>
                <section>
                    <h1>Requirements</h1>
                    <p>
                        To mimic the mobility mechanics of a modern competitive MOBA or RTS, our terrain
                        engine must support various features:
                    </p>
                    <ol>
                        <li>Pathfinding agents optimally from a point to a destination.</li>
                        <li>Blinking to a point (potentially resolving wall collisions).</li>
                        <li>Knocking-back units in a certain direction.</li>
                        <li>Introducing impassable walls and obstacles into the game map.</li>
                        <li>Preventing variable-radius circular unit overlap.</li>
                    </ol>
                    <p>
                        For a game server, these operations must at minimum be performant and
                        robust (they can't break or yield incorrect solutions). We will relax these 
                        constraints for our web-based implementation as we need not support hundreds or 
                        thousands of real concurrent games.
                    </p>
                    <p>
                        That being said, any implementation-level performance or robustness issues are just
                        that: implementation-level. That is to say, the approach I outline reflects the
                        approach I take in my real C# server implementation which does not suffer from
                        such performance or robustness issues.
                    </p>
                </section>
                <section>
                    <h1>Design</h1>
                    <p>
                        The central requirement of our terrain engine is pathfinding; without
                        pathfinding, we cannot mimic the mobility of a modern competitive MOBA or RTS.
                    </p>
                    <p>
                        Such games require their pathfinders achieve optimality; it would be unacceptable
                        to players if agents (in-game units) followed clearly suboptimal paths. From my experience,
                        this optimality requirement is the hardest design constraint faced in building a terrain
                        engine; so hard, in fact, that we will begin by solving the pathfinding problem, then
                        work backwards to a complete engine.
                    </p>
                    <section>
                        <h1>Subproblem 1: Pathfinding on a Graph</h1>
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
                </section>
            </article>
        );
    }

    mounted(): void {
        this.colorManager.push(ColorSchemes.darkBlueGradientColorScheme);
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
        const obstaclesPerSecond = 10;
        const obstacleMinLifetime = 1;
        const obstacleMaxLifetime = 5;
        const tClamped = Math.floor(t * obstaclesPerSecond);
        for (var tFaked = tClamped - obstacleMaxLifetime * obstaclesPerSecond; tFaked < tClamped; tFaked++) {
            const rng = new RNG(tFaked.toString());
            const tDisappears = tFaked + rng.random(obstacleMinLifetime * obstaclesPerSecond, obstacleMaxLifetime * obstaclesPerSecond);
            if (tDisappears >= tClamped) continue;
            const sample = (low: number, high: number) => low + rng.uniform() * (high - low);
            const ow = sample(w / 20, w / 10);
            const oh = sample(w / 20, w / 10);
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
            enableRenderPolyTree: true,
            triangulationFillStyle: 'rgba(255, 255, 255, 0.5)',
            triangulationStrokeStyle: 'rgba(0, 0, 0, 0.7)',
            temporaryHoleFillStyle: 'rgba(44, 44, 44, 1)',
            temporaryHoleStrokeStyle: 'rgba(0, 0, 0, 1)',
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