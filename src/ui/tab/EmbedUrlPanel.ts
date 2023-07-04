import {ImageToolContext, Panel} from "../../types";
import {isUrl} from "../../utils";

export class EmbedUrlPanel implements Panel {

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
        button.classList.add('inline-image__embed-button')
        button.innerText = 'Embed Image'

        button.addEventListener('click', (e: MouseEvent) => {
            const url = input.value;
            if (isUrl(url)) {
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