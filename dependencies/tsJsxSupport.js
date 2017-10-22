// See: http://blog.stchur.com/2017/06/19/jsx-without-react/
window.customJsxVirtualDomFactory = (nodeName, attributes, ...children) => {
    children = [].concat(...children);
    return { nodeName, attributes, children };
};

window.renderVirtualDom = (vdom) => {
    let dom = document.createElement(vdom.nodeName);
    for (let key of (vdom.attributes || {})) {
        dom.setAttribute(key, vdom.attributes[key]);
    }

    for (let child of vdom.children) {
        if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else {
            dom.appendChild(window.renderVirtualDom(child));
        }
    }
    return dom;
}
