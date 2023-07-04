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

export const isUrl = (url:string) => {
    const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

    return regex.test(url);
};

export const DomUtils=  {
    parent,
    isUrl
}