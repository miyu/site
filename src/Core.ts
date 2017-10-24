export interface IRoutable { }

export interface IView {
    fetchContentAsync(): Promise<HTMLElement>;
    mounted(): void;
    tick(dt: number, t: number): void;
    render(dt: number, t: number): void;
    handleResize(): void;
}

export interface IPage extends IRoutable, IView {
}

export class BlankView implements IView {
    public fetchContentAsync (): Promise<HTMLElement> { return Promise.resolve(document.createElement('div')); }
    public mounted (): void { }
    public tick (dt: number, t: number): void { }
    public render (dt: number, t: number): void { }
    public handleResize (): void { }
}

export class BlankPage extends BlankView implements IPage {
}

export type Route = { pattern: RegExp, routableFactory: () => IRoutable };

export class Router implements IRoutable {
    activeRoute: Route[];
    activePage: IPage;
    routes: Route[] = [];

    constructor (private baseUrl: string) {}

    registerRoute(pattern: RegExp, routableFactory: () => IRoutable): void {
        this.routes.push({ pattern, routableFactory });
    }

    resolve(url: string): Route {
        let lastUrl = url;
        while (true) {
            while (this.baseUrl && url.startsWith(this.baseUrl)) url = url.substring(this.baseUrl.length);
            while (url.startsWith('/')) url = url.substring(1);
            while (this.baseUrl && url.startsWith(this.baseUrl)) url = url.substring(this.baseUrl.length);

            if (url === lastUrl) break;
            lastUrl = url;
        }

        let [pathname, search] = url.split('?');
        search = search || '';
        const searchObj = Object.assign.apply(
            null,
            [{}].concat(
                search.split('&')
                .map(s => s.split('='))
                .filter(([k, v]) => k)
                .map(([k, v]) => ({ [k]: v }))
            ));
        return this.routes.find(r => r.pattern && r.pattern.test(pathname));
    }

    navigateToRoute(url: string) {
        let routes: Route[] = [];
        let router: Router = this;
        let page: IPage = null;
        while (!page) {
            // resolve route
            const route: Route = router.resolve(url);
            routes.push(route);

            if (!route) {
                console.log('Routing failed.', url, routes, router);
                throw new Error('Routing Failure');
            }

            // recurse if another router, else page resolved
            const routable = route.routableFactory();
            if (routable instanceof Router) router = routable;
            else page = <IPage>routable;
        }

        this.activePage = page;
        this.activeRoute = routes; // not sure what to call this
    }
}