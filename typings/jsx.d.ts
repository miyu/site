// Required so tsc doesn't explode on jsx expressions
declare namespace JSX {
    // Sorta wonky, to extend from HTMLElement, but typescript doesn't look
    // at customJsxVirtualDomFactory's return value; it unconditionally makes
    // the type of jsx expressions JSX.Element, which we have to clumsily cast
    // to HTMLElement otherwise.
    export interface Element extends HTMLElement {
    }

    export interface IntrinsicElements {
        [tag: string]: any;
    }
}
