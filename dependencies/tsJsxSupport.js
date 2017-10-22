// See: http://blog.stchur.com/2017/06/19/jsx-without-react/
window.customJsxVirtualDomFactory = (nodeName, attributes, ...children) => {
    children = [].concat(...children);
    return renderVirtualDom({ nodeName, attributes, children, virt: true });
};

function renderVirtualDom(vdom) {
    console.log(vdom);
    let dom = document.createElement(vdom.nodeName);
    console.log(dom);
    let attrs = (vdom.attributes || {});
    for (let key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            const resolvedKey =
                key.toLowerCase() === 'classname'
                    ? 'class'
                    : key;
            dom.setAttribute(resolvedKey, vdom.attributes[key]);
        }
    }

    for (let child of vdom.children) {
        if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else if (child.virt) {
            dom.appendChild(window.renderVirtualDom(child));
        } else {
            dom.appendChild(child);
        }
    }
    return dom;
}