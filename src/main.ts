import Typed from 'typed.js';

import { GraphDemo } from './GraphDemo';
import { ColorScheme, ColorManager } from './ColorManager';
const engine: BoilerplateEngine = window;
const whiteColorScheme = new ColorScheme([0, 0, 0], 'linear-gradient(0deg, rgba(255, 255, 255, $a1) 0%, rgba(255, 255, 255, $a2) 100%)', v => v, v => v);
const blackColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(0, 0, 0, $a1) 0%, rgba(0, 0, 0, $a2) 100%)', v => v, v => v);
const blueGradientColorScheme = new ColorScheme([255, 255, 255], 'dummy, replaced on render', v => v, v => v);
const darkBlueGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(52, 73, 94, $a1) 0%, rgba(44, 62, 80, $a2) 100%)', v => v, v => v);
const greenGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(46, 204, 113, $a1) 0%, rgba(39, 174, 96, $a2) 100%)', v => v, v => v);
const purpleGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(155, 89, 182, $a1) 0%, rgba(142, 68, 173, $a2) 100%)', v => v, v => v);
const colorManager = new ColorManager(blackColorScheme);
colorManager.push(blueGradientColorScheme);

import '../style.scss';
window.addEventListener('load', main);

function main() {
    const demo = new GraphDemo();
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

        document.getElementById('resume-link').addEventListener('mouseover', () => colorManager.push(purpleGradientColorScheme));
        document.getElementById('resume-link').addEventListener('mouseleave', () => colorManager.push(blueGradientColorScheme));

        document.getElementById('github-link').addEventListener('mouseover', () => colorManager.push(greenGradientColorScheme));
        document.getElementById('github-link').addEventListener('mouseleave', () => colorManager.push(blueGradientColorScheme));

        document.getElementById('linkedin-link').addEventListener('mouseover', () => colorManager.push(darkBlueGradientColorScheme));
        document.getElementById('linkedin-link').addEventListener('mouseleave', () => colorManager.push(blueGradientColorScheme));
    }

    function render(dt: number, t: number) {
        updateBlueGradientBackground();
        colorManager.render(dt);
        demo.render(dt, t);
    }

    function handleResize() {
        engine.setDisplaySize(document.body.clientWidth, document.body.clientHeight);
    }

    function updateBlueGradientBackground() {
        const screenRect = engine.getScreenRect();
        const e1 = [0, screenRect.y + screenRect.height * 2 / 5];
        const e2 = [screenRect.x + screenRect.width, screenRect.y + screenRect.height * 3 / 5];
        const theta = engine.atan2(engine.sub(e2, e1)) + 0.5 * Math.PI;
        blueGradientColorScheme.s = `linear-gradient(${theta * 180 / Math.PI}deg, rgba(77, 154, 184, $a1) -5%, rgba(70, 58, 132, $a2) 95%)`;
    }
}
