import {ImageToolContext, Panel, PREFIX} from "../../types";
import {DomUtils} from "../../utils";
// @ts-ignore
import debounce from "lodash.debounce";

export class GalleryPanel implements Panel {

    type='Gallery';
    key='Gallery';
    name = 'Gallery';

    context: ImageToolContext;

    gridWrapper: HTMLElement|undefined;

    constructor(context: ImageToolContext) {
        this.context = context;
        this.doSearch = debounce(this.doSearch, 500)
    }

    render(): HTMLElement {
        const wrapper = document.createElement('div');
        const input = document.createElement('input');
        input.classList.add('cdx-input')
        input.setAttribute('type', 'text')
        input.addEventListener('input', ({target})=> {
            // @ts-ignore
            this.doSearch({text: target?.value||''})
        })

        this.gridWrapper = this.renderGrid();
        this.gridWrapper.addEventListener('click', (e:MouseEvent) => {
            const itemElement = DomUtils.parent((e.target as HTMLElement), `.${PREFIX}-gallery-item`)[0];
            if (itemElement) {
                const imgElement = itemElement.querySelector(`.${PREFIX}-gallery-img`);
                const url = imgElement?.getAttribute("src")
                if (url) {
                    this.context.selectImage(url)
                }
            }
        })

        wrapper.append(input, this.gridWrapper);
        return wrapper;
    }

    doSearch(data:{text: string}) {
        // new Promise((resolve, reject)=> {
        //     this.do().then(()=> {
        //
        //     })
        // }).finally(()=> {
        //
        // })
    }

    renderGrid(): HTMLElement {
        if (this.gridWrapper) {
            this.gridWrapper.remove();
        }

        // this.context.load()

        const gridWrapper =  document.createElement('div');
        gridWrapper.classList.add(`${PREFIX}-gallery-wrapper`)
        // const images = ['1', '2', '3', '4', '5', '6', '', ''];
        // @ts-ignore
        const images = [];

        // @ts-ignore
        const nodes = images.map(img => {
            const node = document.createElement('div');
            node.classList.add(`${PREFIX}-gallery-item`)

            const nodeImg = document.createElement('img')
            nodeImg.classList.add(`${PREFIX}-gallery-img`)
            // nodeImg.setAttribute('src', "http://file.deepy.top/jnote/article/1019/image_0_27.png")
            nodeImg.setAttribute('src', "https://www.861ppt.com/static/img/ads.png")
            node.append(nodeImg)
            return node;
        })
        gridWrapper.append(...nodes)

        return  gridWrapper;
    }

    private loadRender(text:string) {
        // load()

    }

    // load():Promise<string[]> {
    //     return  Promise.resolve([])
    // }
}