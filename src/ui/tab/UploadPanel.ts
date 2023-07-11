import {ImageToolContext, Panel, PREFIX} from "../../types";

export class UploadPanel implements Panel {

    type='UploadPanel';
    key='UPLOAD-PANEL';
    name = 'UPLOAD';

    context: ImageToolContext;

    constructor(context: ImageToolContext) {
        this.context = context;
    }

    render(): HTMLElement {
        const wrapper = document.createElement('div');
        const input = document.createElement('input');
        input.classList.add('cdx-input')
        input.setAttribute('type', 'file')

        const button =  document.createElement('div');
        button.classList.add(`${PREFIX}__embed-button`)
        button.innerText = 'Embed Image'

        button.addEventListener('click', (e: MouseEvent) => {
            const files =  input.files;
            if (!files) {
                return;
            }
            this.context.doUpload(files).then((urls) => {
                urls.forEach(url => this.context.selectImage(url))
            });
        })
        wrapper.append(input, button);
        return wrapper;
    }
}