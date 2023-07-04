import {API, BlockToolData} from '@editorjs/editorjs';

export const PREFIX = 'editorjs-image2'

/**
 * editorjs-image2 Tool's input and output data format
 */
export interface ImageToolData extends BlockToolData {
    url:string,
    withBorder:boolean,
    stretched:boolean,
    withBackground:boolean,
}

/**
 * editorjs-image2 Tool's configuration object that passed through the initial Editor config
 */
export interface ImageToolConfig {
    doUpload:(files: FileList|File[]) => Promise<string[]>
}

export interface ImageToolContext {
    api: API;
    selectImage: (url:string) => void,
    doUpload:(files: FileList|File[]) => Promise<string[]>
    getData: ()=> ImageToolData,
}

export interface Panel {
    name:string,
    key: string,
    render:()=>HTMLElement
}


