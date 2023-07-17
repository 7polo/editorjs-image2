/**
 * Import styles library
 */

/**
 * Import icons
 */
import {IconAddBackground, IconAddBorder, IconPicture, IconStretch} from '@codexteam/icons';
// @ts-ignore
import isEqual from "lodash.isequal";

/**
 * Import types
 */
import {ImageToolData, ImageToolConfig, ImageToolContext} from './types';
import {API, BlockAPI, BlockTool, PasteEvent} from '@editorjs/editorjs';
import {Ui} from "./ui";
import {PopoverItem} from "@editorjs/editorjs/types/configs/popover";

/**
 * editorjs-image2 Tool for Editor.js
 */
export default class ImageTool implements BlockTool {
  /**
   * Code API — public methods to work with Editor
   *
   * @link https://editorjs.io/api
   */
   private readonly api: API;

  /**
   * Block API — methods and properties to work with Block instance
   *
   * @link https://editorjs.io/blockapi
   */
  private readonly block: BlockAPI;

  /**
   * Read-only mode flag
   */
  private readonly readOnly: boolean;

  /**
   * Tool data for input and output
   */
  private data: ImageToolData;

  /**
   * Configuration object that passed through the initial Editor configuration.
   */
  private config: ImageToolConfig;

  private ui: Ui;

  private context: ImageToolContext;

  /**
   * Class constructor
   *
   * @link https://editorjs.io/tools-api#class-constructor
   */
  constructor({ data, config, api, block, readOnly }: { data: ImageToolData, config: ImageToolConfig, api: API, block: BlockAPI, readOnly: boolean }) {
    this.data = Object.assign({}, data);
    this.config = config;
    this.api = api;
    this.block = block;
    this.readOnly = readOnly;

    // context
   this.context = {
      api: this.api,
      selectImage: (url:string) => {
        this.selectImage({url})
        this.ui.getTabPanel().hide()
      },
      doUpload: (files: FileList|File[]):Promise<string[]>=> {
        return this.config?.doUpload(files);
      },
      getData:()=> {
        return this.data;
      }
    }

    this.ui = new Ui(this.context, config)
  }

  /**
   * PUBLIC METHODS
   *
   * @link https://editorjs.io/tools-api#public-methods
   */

  /**
   * Creates UI of a Block
   * Required
   * @link https://editorjs.io/tools-api#render
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.ui.render();
  }


  selectImage(data: {url:String}) {
    const newData = Object.assign({}, this.data, data);
    if (isEqual(newData, this.data)) {
      return;
    }

    this.data = newData;
    this.ui.syncUi();
    this.block.dispatchChange();
  }

  applyTune(tuneName:string, value: boolean) {
    const newData = Object.assign({}, this.data, {[`${tuneName}`]: value})
    if (isEqual(newData, this.data)) {
      return;
    }
    this.data = newData;
    this.ui.syncUi();
    this.block.dispatchChange();
  }

  /**
   * Extracts Block data from the UI
   * Required
   * @link https://editorjs.io/tools-api#save
   *
   * @returns {ImageToolData} saved data
   */
  save(): ImageToolData {
    return this.data;
  }

  /**
   * Validates Block data after saving
   * @link https://editorjs.io/tools-api#validate
   *
   * @param {ImageToolData} savedData
   * @returns {boolean} true if data is valid, otherwise false
   */
  validate() {
    if (!this.data.url?.trim()) {
      return false;
    }
    return true;
  }

  /**
   *
   * Returns HTML that will be appended at the top of Block-settings
   * @link https://editorjs.io/tools-api#render-settings
   *
   * @returns {HTMLElement}
   */
  renderSettings() {
      return [
        {
          icon: IconAddBorder,
          label: 'With border',
          toggle: 'withBorder',
          isActive: this.data.withBorder,
          onActivate: () => {
            this.applyTune('withBorder', !this.data.withBorder)
          }
        },
        {
          icon: IconStretch,
          label: 'Stretch image',
          toggle: 'stretched',
          isActive: this.data.stretched,
          onActivate: () => {
            this.block.stretched = !this.data.stretched
            this.applyTune('stretched', !this.data.stretched)
          }
        },
        {
          icon: IconAddBackground,
          label: 'With background',
          toggle: 'withBackground',
          isActive: this.data.withBackground,
          onActivate: () => {
            this.applyTune('withBackground', !this.data.withBackground)
          }
        },
        {
          icon: IconPicture,
          label: 'Pop',
          onActivate: (item: PopoverItem, event?: PointerEvent) => {
            this.api.toolbar.close()
            const target = this.ui?.getContainer()
            if (target) {
              setTimeout(()=> {
                this.ui.getTabPanel().showByElement(target)
              }, 100)
            }
          }
        }
      ];
  }

  /**
   * Clear Tools stuff: cache, variables, events.
   * Called when Editor instance is destroying.
   * @link https://editorjs.io/tools-api#destroy
   *
   * @returns {void}
   */
  destroy() {
    this.ui.destroy()
  }

  /**
   * Handle content pasted by ways that described by pasteConfig static getter
   * @link https://editorjs.io/tools-api#on-paste
   *
   * @param {PasteEvent} event - event with pasted content
   * @returns {void}
   */
  onPaste(event:PasteEvent) {
    event.stopPropagation()
    event.preventDefault()
    event.returnValue = false

    switch (event.type) {
      case 'tag':
        // @ts-ignore
        this.selectImage({url: event.detail.data.src});
        break;
      case 'pattern':
        // @ts-ignore
        this.selectImage({url: event.detail.data});
        break;
      case 'file':
        // @ts-ignore
        const file = event.detail?.file;
        this.context.doUpload([file]).then((urls) => urls.forEach(url => this.context.selectImage(url)))
        break;
      default:
        break;
    }
  }

  /**
   * Specifies how to merge two similar Blocks
   * @link https://editorjs.io/tools-api#merge
   *
   * @param {ImageToolData} data - data of second Block
   * @returns {ImageToolData} - merged data
   */
  // merge() {}

  /**
   * STATIC GETTERS
   *
   * @link https://editorjs.io/tools-api#static-getters
   */

  /**
   * Process pasted content before appending to the Editor
   * @link https://editorjs.io/tools-api#pasteconfig
   *
   * @returns {tags?: string[], files?: { mimeTypes: string[], extensions: string[] }, patterns?: { [string]: RegEx }}
   */
  static get pasteConfig() {
    return {
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp|svg)$/i,
      },
      tags: ['img'],
      files: {
        mimeTypes: ['image/*'],
      },
    };
  }

  /**
   * Clean unwanted HTML tags or attributes
   * @link https://editorjs.io/tools-api#sanitize
   *
   * @returns {{[string]: boolean|object}} - Sanitizer rules
   */
  // static get sanitize() {
  //   return {};
  // }

  /**
   * Describe an icon and title here
   * Required if Tools should be added to the Toolbox
   * @link https://editorjs.io/tools-api#toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      title: 'Image',
      icon: IconPicture,
    };
  }

  /**
   * Shortcut that fires render method and inserts new Block
   * @link https://editorjs.io/tools-api#shortcut
   *
   * @returns {string}
   */
  // static get shortcut() {
  //   // return 'CMD+SHIFT+I';
  // }

  /**
   * Config allows Tool to specify how it can be converted into/from another Tool
   *
   * @link https://editorjs.io/tools-api#conversionconfig
   *
   * @returns {{export: string|function, import: string|function}}
   */
  // static get conversionConfig() {
  //   // return {
  //   //   export: (data) => {
  //   //     return data.items.join('.'); // in this example, all list items will be concatenated to an export string
  //   //   },
  //   //
  //   //   /**
  //   //    * In this example, List Tool creates items by splitting original text by a dot symbol.
  //   //    */
  //   //   import: (string) => {
  //   //     const items = string.split('.');
  //   //
  //   //     return {
  //   //       items: items.filter( (text) => text.trim() !== ''),
  //   //       type: 'unordered'
  //   //     };
  //   //   }
  //   // };
  // }

  /**
   * With this option, Editor.js won't handle Enter keydowns
   * @link https://editorjs.io/tools-api#enablelinebreaks
   *
   * @returns {boolean}
   */
  // static get enableLineBreaks() {
  //   return true;
  // }

  /**
   * This flag tells core that current tool supports the read-only mode
   * @link https://editorjs.io/tools-api#isreadonlysupported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * LIFE CYCLE HOOKS
   *
   * These methods are called by Editor.js core
   * @link https://editorjs.io/tools-api#lifecycle-hooks
   */

  /**
   * Called after Block contents is added to the page
   */
  rendered() {
    this.block.stretched = !!this.data.stretched;
  }

  /**
   * Called each time Block contents is updated
   */
  // updated() {}

  /**
   * Called after Block contents is removed from the page but before Block instance deleted
   */
  // removed() {}

  /**
   * Called after Block is moved by move tunes or through API
   *
   * @param {MoveEvent} event
   */
  // moved(event) {}
};