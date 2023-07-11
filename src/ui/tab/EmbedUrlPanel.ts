import {ImageToolContext, Panel, PREFIX} from "../../types";
import {DomUtils} from "../../utils";

export class EmbedUrlPanel implements Panel {

    type='EmbedUrlPanel';
    key='URL-PANEL';
    name = 'URL';

    context: ImageToolContext;

    constructor(context: ImageToolContext) {
        this.context = context;
    }

    render(): HTMLElement {
        const wrapper =  document.createElement('div');
        const input =  document.createElement('input');
        input.classList.add('cdx-input')
        input.value = this.context.getData().url || '';

        const button =  document.createElement('div');
        button.classList.add(`${PREFIX}__embed-button`)
        button.innerText = 'Embed Image'

        button.addEventListener('click', (e: MouseEvent) => {
            const url = input.value;
            if (DomUtils.isUrl(url)) {
                this.context.selectImage(url)
            } else {
                this.context.api.notifier.show({
                    message: 'Please enter a valid url.',
                    style: 'error',
                });
            }
        })
        wrapper.append(input, button);
        return wrapper;
    }
}