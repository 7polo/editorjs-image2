import {ImageToolContext, Panel} from "../../types";

export class UploadPanel implements Panel {

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

        // const embedImageButton = make('div', ['inline-image__embed-button', 'cdx-input'], {
        //     innerHTML: 'Embed Image',
        //     onclick: () => {
        //         const files =  this.nodes.input.files;
        //         this.config.upload.doUpload(files).then(({url}) => {
        //             this.onSelectImage({url});
        //         });
        //     }
        // });

        const button =  document.createElement('div');
        button.classList.add('inline-image__embed-button')
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