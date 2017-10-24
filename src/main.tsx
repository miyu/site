import { ColorSchemes, ColorManager } from './ColorManager';
import { Router, IPage, BlankPage } from './Core';

import { GraphDemo } from './Common/GraphDemo';
import { LandingPage } from './Landing/LandingPage';
import { Building2DRtsTerrainEnginePage } from './Blog/Building2DRtsTerrainEnginePage';

import '../style.scss';

// Pull dependencies from global context
const engine: BoilerplateEngine = window;
const { Key: Key } = window;

// Setup Color Manager. Page init fades black -> blue (set to black)
const colorManager = new ColorManager(ColorSchemes.blueGradientColorScheme, ColorSchemes.blueGradientColorScheme);

// Setup helper views
const graphDemo = new GraphDemo(colorManager);

// Setup Router
const routePrefix: string = (window as any).globalRoutePrefix;

const blogRouter = new Router(`${routePrefix}/blog`);
blogRouter.registerRoute(/^building-2d-rts-terrain-engine/, () => new Building2DRtsTerrainEnginePage(colorManager));

const router = new Router(`${routePrefix}`);
router.registerRoute(/^$/, () => new LandingPage(colorManager, graphDemo));
router.registerRoute(/^blog/, () => blogRouter);
router.navigateToRoute(window.location.pathname + window.location.search);

let currentlyRenderedPage: IPage = null;
let currentlyRenderedRoot: HTMLElement = null;
let nextZIndex = 1;

function main() {
    engine.init(1280, 720, 60);
    engine.displayCanvas.className = 'render-view';
    
    engine.onTickEnter(tick);
    engine.onFrameEnter(render);

    window.addEventListener('resize', handleResize);
    window.addEventListener('resizestart', handleResize);
    window.addEventListener('resizeend', handleResize);

    let isFirstTick = true;
    function tick(dt: number, t: number) {
        if (isFirstTick) {
            isFirstTick = false;
            firstTick();
        }
        if (currentlyRenderedRoot !== null) {
            currentlyRenderedPage.tick(dt, t);
        }
    }

    function firstTick() {
        handleResize();
    }

    function render(dt: number, t: number) {
        colorManager.render(dt);

        engine.clear();
        if (currentlyRenderedPage !== router.activePage) {
            if (currentlyRenderedRoot) {
                currentlyRenderedRoot.remove();
                currentlyRenderedRoot = null;
            }
            currentlyRenderedPage = router.activePage;
            loadPageContentsAsync(currentlyRenderedPage);
        }
        if (currentlyRenderedRoot !== null) {
            currentlyRenderedPage.render(dt, t);
        }

        if (true || Key.isDown('z')) {
            const ctx = engine.displayCanvas.getContext('2d');
            ctx.fillStyle = colorManager.computeForegroundColor(1);
            ctx.fillText(`MTE ${1000 * engine.computeMeanTickExecutionTime()}ms`, 0, 10);
            ctx.fillText(`MRE ${1000 * engine.computeMeanRenderExecutionTime()}ms `, 0, 20);
            ctx.fillText(`MRI ${1000 * engine.computeMeanRenderInterval()}ms`, 0, 30);
            ctx.fillText(`FPS ~${1 / engine.computeMeanRenderInterval()}`, 0, 40);
            ctx.fillText(`RES ${engine.getScreenRect().width} x ${engine.getScreenRect().height}`, 0, 50);
        }
    }

    async function loadPageContentsAsync(page: IPage) {
        currentlyRenderedRoot = await page.fetchContentAsync();
        document.body.appendChild(currentlyRenderedRoot);

        page.mounted();
    }

    function handleResize() {
        engine.setDisplaySize(document.body.clientWidth, document.body.clientHeight);
        engine.displayCanvas.style.width = document.body.clientWidth + 'px';
        engine.displayCanvas.style.height = document.body.clientHeight + 'px';
//        engine.activeContext.imageSmoothingEnabled = false;

        colorManager.handleResize();

        if (currentlyRenderedRoot !== null) {
            currentlyRenderedPage.handleResize();
        }
    }
}

window.addEventListener('load', main);
