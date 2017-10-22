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
                </header>
            </article>
        );
    }

    mounted() {
    }

    tick(dt: number, t: number): void {
    }

    render(dt: number, t: number): void {
    }

    handleResize(): void {
    }
}