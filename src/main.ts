import { GraphDemo } from './GraphDemo';
const engine: BoilerplateEngine = window;

import '../style.scss';
window.addEventListener('load', main);

import Typed from 'typed.js';
import flowtype from 'flowtype-js';

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
    }

    function render(dt: number, t: number) {
        demo.render(dt, t);
    }

    function handleResize() {
        engine.setDisplaySize(document.body.clientWidth, document.body.clientHeight);
    }
}
