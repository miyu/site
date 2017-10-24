const engine: BoilerplateEngine = window;

export class ColorScheme {
    constructor(public foreground: number[], public s: string, public a1: (t: number) => number, public a2: (t: number) => number) { }

    compute(t: number): string {
        return this.s.replace('$a1', this.a1(t).toString()).replace('$a2', this.a2(t).toString());
    }
}

export class ColorSchemes {
    // Probably needs a special name because it's a special snowflake color scheme.
    public static blueGradientColorScheme = new ColorScheme([255, 255, 255], 'dummy, replaced on render', v => v, v => v);

    public static whiteColorScheme = new ColorScheme([22, 22, 22], 'linear-gradient(0deg, rgba(255, 255, 255, $a1) 0%, rgba(255, 255, 255, $a2) 100%)', v => v, v => v);
    public static blackColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(0, 0, 0, $a1) 0%, rgba(0, 0, 0, $a2) 100%)', v => v, v => v);
    public static darkBlueGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(52, 73, 94, $a1) 0%, rgba(44, 62, 80, $a2) 100%)', v => v, v => v);
    public static greenGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(46, 204, 113, $a1) 0%, rgba(39, 174, 96, $a2) 100%)', v => v, v => v);
    public static purpleGradientColorScheme = new ColorScheme([255, 255, 255], 'linear-gradient(0deg, rgba(155, 89, 182, $a1) 0%, rgba(142, 68, 173, $a2) 100%)', v => v, v => v);
}

const defaultTransitionInterval = 0.1;

export class ColorManager {
    private s: {scheme: ColorScheme, interval: number}[] = [];
    private t: number = 0;
    private lastForegroundColor = '';
    private lastBackgroundColor = '';

    constructor(private currentColorScheme: ColorScheme, private defaultColorScheme: ColorScheme) {}

    render(dt: number) {
        if (this.s.length !== 0) {
            this.t += dt;
            while (this.s.length !== 0 && this.t >= this.s[0].interval) {
                const completeTransition = this.s.shift();
                this.currentColorScheme = completeTransition.scheme;
                this.t -= completeTransition.interval;
            }
            if (this.s.length === 0) {
                this.t = 0;
            }
        }

        let backgroundColor: string = this.s.length === 0
            ? this.currentColorScheme.compute(1)
            : this.currentColorScheme.compute(1 - this.t / this.s[0].interval) + ', ' + this.s[0].scheme.compute(1);;
        let foregroundColor = this.computeForegroundColor(1);

        // backgroundColor = "black";
        if (backgroundColor !== this.lastBackgroundColor) {
            console.log("bg", backgroundColor);
            //window.document.body.style.background = backgroundColor;
            this.lastBackgroundColor = backgroundColor;
        }
        if (foregroundColor !== this.lastForegroundColor) {
            console.log(foregroundColor);

            //window.document.body.style.color = foregroundColor;
            this.lastForegroundColor = foregroundColor;
        }
    }

    computeForegroundColor(alpha: any) {
        const color = this.s.length === 0
            ? this.currentColorScheme.foreground
            : engine.lerp(this.currentColorScheme.foreground, this.s[0].scheme.foreground, this.t / this.s[0].interval)
                    .map(v => Math.round(v));
        return `rgba(${color.join(', ')}, ${alpha})`;
    }

    push(bg: ColorScheme, thres?: number) {
        const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        const isIE = /*@cc_on!@*/false || !!(document as any).documentMode;
        const isEdge = !isIE && !!(window as any).StyleMedia;
        if (!isChrome && !isEdge) {
            bg = ColorSchemes.whiteColorScheme;
        }

        bg = bg || this.defaultColorScheme;
        if (this.s.length === 0) {
            this.t = 0;
        }
        while (this.s.length > 1) { // don't allow more than 2 in q (first can be in-transition, second certainly not)
            this.s.pop();
        }
        this.s.push({ scheme: bg, interval: thres || defaultTransitionInterval });
    }

    handleResize() {
        const screenRect = engine.getScreenRect();
        const e1 = [0, screenRect.y + screenRect.height * 2 / 5];
        const e2 = [screenRect.x + screenRect.width, screenRect.y + screenRect.height * 3 / 5];
        const theta = engine.atan2(engine.sub(e2, e1)) + 0.5 * Math.PI;
        ColorSchemes.blueGradientColorScheme.s = `linear-gradient(${theta * 180 / Math.PI}deg, rgba(77, 154, 184, $a1) -5%, rgba(70, 58, 132, $a2) 95%)`;
    }
}
