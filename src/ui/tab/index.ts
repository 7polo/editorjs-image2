import {ImageToolContext, PREFIX} from "../../types";
import {EmbedUrlPanel} from "./EmbedUrlPanel";
import {UploadPanel} from "./UploadPanel";

export class TabPanel {

    private nodes: {[key: string]: HTMLElement|null};

    private readonly context: ImageToolContext;

    private tabs:any[] = [];

    private activeTab = '';

    private eventIds: string[] = []

    constructor(context:ImageToolContext) {
        this.nodes = {
            wrapper: null,
            empty: null,
            input: null,
        };
        this.context = context;
    }

    private render() {
        if (this.nodes.wrapper) {
            return
        }
        this.nodes.wrapper = document.createElement('div');
        this.nodes.wrapper.classList.add(`${PREFIX}-tab`)

        const nav =  document.createElement('div')
        nav.classList.add(`${PREFIX}-tab-nav`)

        const content =  document.createElement('div')
        content.classList.add(`${PREFIX}-tab-content`)

        const tabPanels = [
            new EmbedUrlPanel(this.context),
            new UploadPanel(this.context),
        ];

        tabPanels.forEach((panel, index) => {
            const tag = document.createElement('span');
            tag.classList.add(`${PREFIX}-tab-nav_item`)
            tag.innerHTML = panel.name;
            tag.setAttribute('tabIndex', `${index}`)
            tag.addEventListener('click', ()=> {
                this.showTab(panel.key)
            })

            const content = document.createElement('div');
            content.classList.add(`${PREFIX}-tab-content_item`)
            content.appendChild(panel.render());
            this.tabs.push({key: panel.key, tag, content })
        })

        nav.append(...this.tabs.map(it => it.tag))
        content.append(...this.tabs.map(it => it.content))
        this.nodes.wrapper.append(nav, content);
        document.body.append(this.nodes.wrapper)

        // handle to hide
        this.batchBindEvent(this.context.api.ui.nodes.wrapper, ['click'],  (e)=> {
            e?.stopPropagation()
            this.hide()
        })

        this.batchBindEvent(this.nodes.wrapper, ['keydown', 'keyup', 'click'], (e)=> {
            e?.stopPropagation()
        })

        const parent = document.body;
        if (parent) {
            this.batchBindEvent(parent, ['keydown', 'keyup', 'click'], ()=> {
                this.destroy()
            })
        }
    }

    show(pos:{x: number, y:number}) {
        if (!this.nodes.wrapper) {
            this.render()
        }
        if (!this.nodes.wrapper) {
            return
        }

        if (!this.activeTab) {
            this.showTab('URL-PANEL');
        }
        // @ts-ignore
        Object.assign(this.nodes.wrapper.style, {
            top: `${pos.y + 60}px`,
            left: `${pos.x}px`
        })
        this.nodes.wrapper.classList.remove(`${PREFIX}-hidden`)
    }

    showByElement(target:HTMLElement) {
        if (target) {
            const {x, y} =  target.getBoundingClientRect()
            this.show({x, y: y})
        }
    }

    hide() {
        if (this.nodes.wrapper) {
            this.nodes.wrapper.classList.add(`${PREFIX}-hidden`)
        }
        this.activeTab = ''
    }

    getActiveTab() {
        return this.activeTab;
    }

    destroy() {
        this.eventIds.forEach(eventId => this.context.api.listeners.offById(eventId))
        this.nodes.wrapper?.remove()
        this.tabs = []
        this.eventIds = []
        this.nodes = {}
        this.activeTab = ''
    }

    private showTab(tabKey: string) {
        if (tabKey === this.activeTab) {
            return;
        }
        this.activeTab = tabKey;
        this.tabs.forEach(it => {
            if (it.key === tabKey) {
                it.tag.classList.add('active')
                it.content.classList.add('active')

                setTimeout(()=> it.content.getElementsByClassName('cdx-input')[0]?.focus(), 100)
            } else {
                it.tag.classList.remove('active')
                it.content.classList.remove('active')
            }
        })
    }

    private batchBindEvent(element: Element, eventTypes: string[], handler: (event?: Event) => void, useCapture?: boolean) {
        eventTypes.forEach(eventType =>  {
            const eventId = this.context.api.listeners.on(element, eventType,  handler, useCapture)
            this.eventIds.push(eventId)
        })
    }
}