export interface IPage {
    fetchContent(): Promise<HTMLElement>;
    mounted(): void;
    tick(dt: number, t: number): void;
    render(dt: number, t: number): void;
    handleResize(): void;
}