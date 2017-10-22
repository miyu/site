import { ColorScheme, ColorSchemes, ColorManager } from './ColorManager';

const engine: BoilerplateEngine = window;
const blueGradientColorScheme = new ColorScheme([255, 255, 255], 'dummy, replaced on render', v => v, v => v);
const colorManager = new ColorManager(ColorSchemes.blackColorScheme, blueGradientColorScheme);
colorManager.push(blueGradientColorScheme);

import '../style.scss';
window.addEventListener('load', main);

const Key: Key = window.Key;

import { GraphDemo } from './GraphDemo';
import { LandingPage } from './Landing/LandingPage';

function main() {
    const landingPage = new LandingPage(colorManager);
    const demo = new GraphDemo(colorManager);
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
        demo.tick(dt, t);
    }

    function firstTick() {
        landingPage.fetchContent().then(el => {
            console.log(el);
            document.body.appendChild(el);
            landingPage.mounted();
        });

        handleResize();
    }

    function render(dt: number, t: number) {
        updateBlueGradientBackground();
        colorManager.render(dt);
        demo.render(dt, t);

        if (Key.isDown('z')) {
            const ctx = engine.displayCanvas.getContext('2d');
            ctx.fillStyle = colorManager.computeForegroundColor(1);
            ctx.fillText(`MTE ${1000 * engine.computeMeanTickExecutionTime()}ms`, 0, 100);
            ctx.fillText(`MRE ${1000 * engine.computeMeanRenderExecutionTime()}ms `, 0, 110);
            ctx.fillText(`MRI ${1000 * engine.computeMeanRenderInterval()}ms`, 0, 120);
            ctx.fillText(`FPS ~${1 / engine.computeMeanRenderInterval()}`, 0, 130);
            ctx.fillText(`RES ${engine.getScreenRect().width} x ${engine.getScreenRect().height}`, 0, 140);
        }
    }

    function handleResize() {
        engine.setDisplaySize(document.body.clientWidth, document.body.clientHeight);
        engine.displayCanvas.style.width = document.body.clientWidth + 'px';
        engine.displayCanvas.style.height = document.body.clientHeight + 'px';
//        engine.activeContext.imageSmoothingEnabled = false;
    }

    function updateBlueGradientBackground() {
        const screenRect = engine.getScreenRect();
        const e1 = [0, screenRect.y + screenRect.height * 2 / 5];
        const e2 = [screenRect.x + screenRect.width, screenRect.y + screenRect.height * 3 / 5];
        const theta = engine.atan2(engine.sub(e2, e1)) + 0.5 * Math.PI;
        blueGradientColorScheme.s = `linear-gradient(${theta * 180 / Math.PI}deg, rgba(77, 154, 184, $a1) -5%, rgba(70, 58, 132, $a2) 95%)`;
    }
}
