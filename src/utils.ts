//@ts-ignore
function parent(element:HTMLElement, selector:string) {
    const result = [];
    const matchesSelector = element.matches
        // @ts-ignore
        || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;

    // match start from parent
    let el:HTMLElement|null = element;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            result.push(el);
        }
        el = el.parentElement;
    }
    return result;
}

const isUrl = (url:string) => {
    const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

    return regex.test(url);
};
function simulateMouseOver(element: HTMLElement) {
    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('mouseover',true,true,
        // @ts-ignore
        Window,0,0,0,0,0,
        false,false,false,false,0,null);
    // 派发
    element.dispatchEvent(event);
}


export const DomUtils=  {
    parent,
    isUrl,
    simulateMouseOver
}