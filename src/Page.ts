export interface IPage {
    handleLoaded(): void;
    tick(dt: number, t: number): void;
    render(dt: number, t: number): void;
    handleResize(): void;
}