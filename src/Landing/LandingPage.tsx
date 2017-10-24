
import { IPage } from '../Core';
import { ColorManager, ColorSchemes } from '../ColorManager';
import { GraphDemo } from '../Common/GraphDemo';

import './style.scss';

import Typed from 'typed.js';

export class LandingPage implements IPage {
    constructor (private colorManager: ColorManager, private graphDemo: GraphDemo) {}

    async fetchContentAsync(): Promise<HTMLElement> {
        const resumeLink = <li id="resume-link"><a href='https://miyu.github.io/resume'>Resume</a></li>;
        const githubLink = <li id="github-link"><a href='https://www.github.com/miyu'>GitHub</a></li>;
        const linkedinLink = <li id="linkedin-link"><a href='https://www.linkedin.com/in/warty'>LinkedIn</a></li>;

        resumeLink.addEventListener('mouseover', () => this.colorManager.push(ColorSchemes.purpleGradientColorScheme));
        resumeLink.addEventListener('mouseleave', () => this.colorManager.push(null));

        githubLink.addEventListener('mouseover', () => this.colorManager.push(ColorSchemes.greenGradientColorScheme));
        githubLink.addEventListener('mouseleave', () => this.colorManager.push(null));

        linkedinLink.addEventListener('mouseover', () => this.colorManager.push(ColorSchemes.darkBlueGradientColorScheme));
        linkedinLink.addEventListener('mouseleave', () => this.colorManager.push(null));

        const blogPostList = (
            <nav className="blog-post-list">
                <h1>Blogs</h1>
                <ul>
                    <li><a href='/blog/building-2d-rts-terrain-engine'>Building an RTS Terrain Engine from Scratch (WIP)</a></li>
                    <li><a href='http://www.itzwarty.com/character-detection-in-league-of-legends-artwork/'>Character Detection in League of Legends Artwork</a></li>
                    <li><a href='http://www.itzwarty.com/'>See More &raquo;</a></li>
                </ul>
            </nav>
        );

        blogPostList.addEventListener('mouseover', () => this.colorManager.push(ColorSchemes.whiteColorScheme));
        blogPostList.addEventListener('mouseleave', () => this.colorManager.push(null));
        // &#x25BE;
        return (
            <section className='intro'>
                <header id="intro-header">
                    <h1>Michael Yu</h1>
                    <h2><span className="whoami"></span></h2>
                    <nav className="link-list">
                        <ul>
                            {resumeLink}
                            {githubLink}
                            {linkedinLink}
                        </ul>
                    </nav>
                </header>
                {blogPostList}
                <aside>
                    Point Cloud Convex Hull
                </aside>
            </section>
        );
    }

    mounted() {
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

    tick(dt: number, t: number): void {
        this.graphDemo.tick(dt, t);
    }

    render(dt: number, t: number): void {
        this.graphDemo.render(dt, t);
    }

    handleResize(): void {
    }
}