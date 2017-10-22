declare global {
    function customJsxVirtualDomFactory(nodeName: string, attributes: any, ...children: any): HTMLElement;
}

export class Dummy {
}
