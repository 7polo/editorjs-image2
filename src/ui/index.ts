import "./index.less";
import {IconPicture} from "@codexteam/icons";
import {ImageToolContext, PREFIX} from "../types";
import {TabPanel} from "./tab";
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css'
import ErrorImage from './error_img.svg';

let globalLock = false;
let globalErrorListenerFlag = false;
export class Ui {

    /**
     * Tool's HTML nodes
     */
    private nodes: {[key: string]: HTMLElement|null};

    private readonly tabPanel : TabPanel;

    private context : ImageToolContext;

    constructor(context:ImageToolContext) {
        this.context = context;

        this.nodes = {
            wrapper: null,
            empty: null,
            imagePreloader: null,
            imageHolder: null,
            imageView: null,
        };

        this.tabPanel = new TabPanel(context);
    }

    public getContainer() {
        return this.nodes.wrapper;
    }

    render() {
        if (!this.nodes.wrapper) {
            this.nodes.wrapper = document.createElement('div');
            this.nodes.wrapper.classList.add(`${PREFIX}`, 'cdx-block', 'inline-image')

            const input = document.createElement('div');
            input.setAttribute('contenteditable', "true");
            input.classList.add(`${PREFIX}-input`)
            this.nodes.wrapper.append(input);

            this.nodes.wrapper.append(this.renderEmpty())
            this.nodes.wrapper.append(this.renderImage())
            // @ts-ignore
            this.nodes.emptyHolder?.addEventListener('click', (e:MouseEvent)=> {
                e?.stopPropagation()
                if (this.tabPanel.getActiveTab()) {
                    this.tabPanel.hide()
                    return
                }
                this.tabPanel.showByElement((this.nodes.wrapper as HTMLElement))
            })
            this.nodes.imageHolder?.addEventListener('click', (e:MouseEvent)=> {
                e?.stopPropagation()
                this.preview()
            })

            // auto show
            setTimeout(()=> {
                this.syncUi()
                if (this.context.getData().url) {
                    return;
                }
                this.tabPanel.showByElement((this.nodes.wrapper as HTMLElement))
            })
        }
        return this.nodes.wrapper;
    }

    syncUi() {
        const data = this.context.getData();
        if (data.url) {
            this.nodes.imageHolder?.classList.remove(`${PREFIX}-hidden`)
            if (this.nodes.imageView?.getAttribute("src") !== this.context.getData().url) {
                this.nodes.imageView?.setAttribute("src", this.context.getData().url)
            }
            this.nodes.emptyHolder?.classList.add(`${PREFIX}-hidden`)
        } else {
            this.nodes.imageHolder?.classList.add(`${PREFIX}-hidden`)
            this.nodes.emptyHolder?.classList.remove(`${PREFIX}-hidden`)
        }

        const tunes = ['withBorder', 'stretched', 'withBackground']
        this.nodes.imageHolder?.classList.add(
            ...tunes.filter(tune=> data[tune] === true)
                .map(tune=> `inline-image__picture--${tune}`)
        );
        this.nodes.imageHolder?.classList.remove(
            ...tunes.filter(tune=> data[tune] === false)
                .map(tune=> `inline-image__picture--${tune}`)
        );
    }

    destroy() {
        this.nodes.wrapper?.remove()
        this.nodes = {
            wrapper: null,
            input: null,
            emptyHolder: null,
            imagePreloader: null,
            imageHolder: null,
            imageView: null,
        };
        this.tabPanel?.destroy()
    }

    getTabPanel() {
        return this.tabPanel;
    }

    private renderEmpty() {
        if (this.nodes.emptyHolder) {
            return this.nodes.emptyHolder;
        }

        const emptyHolder = document.createElement('div');
        emptyHolder.classList.add(`${PREFIX}-empty`, `${PREFIX}-hidden`);
        emptyHolder.dataset.mutationFree = 'true'

        const icon = document.createElement('span');
        icon.classList.add(`${PREFIX}-empty_icon`);
        icon.innerHTML = IconPicture;

        const tip = document.createElement('span');
        tip.classList.add(`${PREFIX}-empty_tip`);
        tip.innerHTML = '添加图片';

        emptyHolder.append(icon)
        emptyHolder.append(tip)
        return this.nodes.emptyHolder = emptyHolder;
    }

    private renderImage() {
        if (this.nodes.imageHolder) {
            return this.nodes.imageHolder;
        }
        const imageHolder = document.createElement('div');
        imageHolder.classList.add(`${PREFIX}-image`, `${PREFIX}-hidden`, 'inline-image__picture');
        imageHolder.dataset.mutationFree = 'true'

        const imageView = document.createElement('img');
        imageView.classList.add('image__picture__data')
        imageView.setAttribute("src", this.context.getData().url)
        imageView.dataset.mutationFree = 'true'

        imageHolder.append(imageView)

        if (!globalErrorListenerFlag) {
            globalErrorListenerFlag = true;
            document.addEventListener('error', (e: ErrorEvent) => {
                let target = (e.target as HTMLElement)
                const tagName = target.tagName || ''
                // @ts-ignore
                if (tagName.toLowerCase() === 'img' && target?.src?.length > 0) {
                    // @ts-ignore
                    target.src = ErrorImage
                    target.dataset.state = "false"
                }
            }, true)
        }

        this.nodes.imageView = imageView;
        return this.nodes.imageHolder = imageHolder;
    }

    private preview() {
        if (this.nodes.imageHolder && this.context.getData().url) {
            const viewer = new Viewer(this.nodes.imageHolder, {
                inline: false,
                navbar: false,
                title: false,
                container: document.body,
                toolbar: {
                    zoomIn: 4,
                    zoomOut: 4,
                    oneToOne: 4,
                    reset: 4,
                    play: {
                        show: 4,
                        size: 'large',
                    },
                    rotateLeft: 4,
                    rotateRight: 4,
                    flipHorizontal: 4,
                    flipVertical: 4,
                },
                hidden() {
                    viewer.destroy();
                }
            });
            viewer.show();
        }
    }
}