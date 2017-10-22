import Typed from 'typed.js';

import { GraphDemo } from './GraphDemo';
import { ColorScheme, ColorSchemes, ColorManager } from './ColorManager';
const engine: BoilerplateEngine = window;
const blueGradientColorScheme = new ColorScheme([255, 255, 255], 'dummy, replaced on render', v => v, v => v);
const colorManager = new ColorManager(ColorSchemes.blackColorScheme);
colorManager.push(blueGradientColorScheme);

import '../style.scss';
window.addEventListener('load', main);

const Key: Key = window.Key;

function main() {
    const demo = new GraphDemo(colorManager);
    engine.init(1280, 720, 60);
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
        handleResize();
        engine.displayCanvas.className = 'render-view';

        console.log(<div></div>);

        const throwaway = new Typed('.whoami', {
            strings: [
                'Software Engineer',
                'UW Seattle CSE \'18',
                'Builds Games',
                'Builds Robots',
                'Software Engineer'
            ],
//            strings: ['Software Engineer', 'Student at UW Seattle'],
            typeSpeed: 50,
            backSpeed: 20,
            loop: false,
            cursorChar: '|'
        });

        document.getElementById('resume-link').addEventListener('mouseover', () => colorManager.push(ColorSchemes.purpleGradientColorScheme));
        document.getElementById('resume-link').addEventListener('mouseleave', () => colorManager.push(blueGradientColorScheme));

        document.getElementById('github-link').addEventListener('mouseover', () => colorManager.push(ColorSchemes.greenGradientColorScheme));
        document.getElementById('github-link').addEventListener('mouseleave', () => colorManager.push(blueGradientColorScheme));

        document.getElementById('linkedin-link').addEventListener('mouseover', () => colorManager.push(ColorSchemes.darkBlueGradientColorScheme));
        document.getElementById('linkedin-link').addEventListener('mouseleave', () => colorManager.push(blueGradientColorScheme));

        document.getElementsByClassName('blog-post-list')[0].addEventListener('mouseover', () => colorManager.push(ColorSchemes.whiteColorScheme));
        document.getElementsByClassName('blog-post-list')[0].addEventListener('mouseleave', () => colorManager.push(blueGradientColorScheme));
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
