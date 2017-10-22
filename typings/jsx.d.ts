// Required so tsc doesn't explode on jsx expressions
declare namespace JSX {
    export interface Element { }
    export interface IntrinsicElements { div: any; }
}

// 
declare global {
    export interface VirtualDom {
    }

    function customJsxVirtualDomFactory(nodeName: string, attributes: any, ...children: any): VirtualDom;
    function renderVirtualDom(vdom: VirtualDom): HTMLElement;
}
