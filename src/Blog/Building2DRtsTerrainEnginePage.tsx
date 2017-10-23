import { IPage } from '../Core';
import { ColorManager, ColorSchemes } from '../ColorManager';

import './base.scss';

export class Building2DRtsTerrainEnginePage implements IPage {
    constructor (private colorManager: ColorManager) {}

    async fetchContentAsync(): Promise<HTMLElement> {
        return (
            <article className='blog-article'>
                <header id="intro-header">
                    <h1>Building a 2D RTS Terrain Engine</h1>
                    <p>
                        In this article we'll roll our own 2D RTS terrain engine. 
                    </p>
                    <img src="/assets/rts/VariableRadius.gif" />
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
    }

    tick(dt: number, t: number): void {
    }

    render(dt: number, t: number): void {
    }

    handleResize(): void {
    }
}