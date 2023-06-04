import {HTMLMediaElement} from './media-element.js';
import {registerHTMLClass} from '../shared/register-html-class.js';

const tagName = 'video';

/**
 * @implements globalThis.HTMLVideoElement
 */
class HTMLVideoElement extends HTMLMediaElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLVideoElement);

export {HTMLVideoElement};
