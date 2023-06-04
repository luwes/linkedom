import {HTMLMediaElement} from './media-element.js';
import {registerHTMLClass} from '../shared/register-html-class.js';

const tagName = 'audio';

/**
 * @implements globalThis.HTMLAudioElement
 */
class HTMLAudioElement extends HTMLMediaElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLAudioElement);

export {HTMLAudioElement};
