const engine: BoilerplateEngine = window;

export class ColorScheme {
    constructor(public foreground: number[], public s: string, public a1: (t: number) => number, public a2: (t: number) => number) { }

    compute(t: number): string {
        return this.s.replace('$a1', this.a1(t).toString()).replace('$a2', this.a2(t).toString());
    }
}

export class ColorSchemes {
    public static whiteColorScheme = new ColorScheme([22, 22, 22], 'linear-gradient(0deg, rgba(255, 255, 255, $a1) 0%, rgba(255, 255, 255, $a2) 100%)', v => v, v => v);
    public static blackColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(0, 0, 0, $a1) 0%, rgba(0, 0, 0, $a2) 100%)', v => v, v => v);
    public static darkBlueGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(52, 73, 94, $a1) 0%, rgba(44, 62, 80, $a2) 100%)', v => v, v => v);
    public static greenGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(46, 204, 113, $a1) 0%, rgba(39, 174, 96, $a2) 100%)', v => v, v => v);
    public static purpleGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(155, 89, 182, $a1) 0%, rgba(142, 68, 173, $a2) 100%)', v => v, v => v);
}

const swipeTime = 0.1;

export class ColorManager {
    private s: ColorScheme[] = [];
    private t: number = 0;
    private lastForegroundColor = '';
    private lastBackgroundColor = '';

    constructor(private currentColorScheme: ColorScheme, private defaultColorScheme: ColorScheme) {}

    render(dt: number) {
        let tNext = this.t + dt;
        while (tNext > swipeTime) {
            tNext -= swipeTime;
            if (this.s.length !== 0) {
                this.currentColorScheme = this.s.shift();
            }
        }
        this.t = tNext;

        let backgroundColor: string;
        if (this.s.length === 0) {
            backgroundColor = this.currentColorScheme.compute(1);
        } else {
            const newPercent = this.t / swipeTime;
            backgroundColor = this.currentColorScheme.compute(1 - newPercent) + ', ' + this.s[0].compute(1);
        }
        let foregroundColor = this.computeForegroundColor(1);
        if (backgroundColor !== this.lastBackgroundColor) {
            window.document.body.style.background = backgroundColor;
            this.lastBackgroundColor = backgroundColor;
        }
        if (foregroundColor !== this.lastForegroundColor) {
            window.document.body.style.color = foregroundColor;
            this.lastForegroundColor = foregroundColor;
        }
    }

    computeForegroundColor(alpha: any) {
        const color = this.s.length === 0
            ? this.currentColorScheme.foreground
            : engine.lerp(this.currentColorScheme.foreground, this.s[0].foreground, 1 - this.t / swipeTime)
                    .map(v => Math.round(v));
        return `rgba(${color.join(', ')}, ${alpha})`;
    }

    push(bg: ColorScheme) {
        bg = bg || this.defaultColorScheme;
        if (this.s.length === 0) {
            this.t = 0;
        }
        while (this.s.length > 1) { // don't allow more than 2 in q (first can be in-transition, second certainly not)
            this.s.pop();
        }
        this.s.push(bg);
    }
}