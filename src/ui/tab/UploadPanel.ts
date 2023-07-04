import {ImageToolContext, Panel} from "../../types";

export class UploadPanel implements Panel {

    key='UPLOAD-PANEL';
    name = 'UPLOAD';

    context: ImageToolContext;

    constructor(context: ImageToolContext) {
        this.context = context;
    }

    render(): HTMLElement {
        return document.createElement('div');
    }
}