import {HTMLElement} from './element.js';
import {booleanAttribute,stringAttribute} from '../shared/attributes.js';

const data = Symbol('data');

/**
 * @implements globalThis.HTMLMediaElement
 */
export class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
    this[data] = {};
  }

  /* c8 ignore start */
  get paused() { return !this.hasAttribute('autoplay'); }

  get volume() { return this[data].volume ?? 1; }
  set volume(value) { this[data].volume = value; }

  get currentTime() { return this[data].currentTime ?? 0; }
  set currentTime(value) { this[data].currentTime = value; }

  get muted() { return this[data].muted ?? this.defaultMuted; }
  set muted(value) { this[data].muted = value; }

  get defaultMuted() { return booleanAttribute.get(this, 'muted'); }
  set defaultMuted(value) { booleanAttribute.set(this, 'muted', value); }

  get autoplay() { return booleanAttribute.get(this, 'autoplay'); }
  set autoplay(value) { booleanAttribute.set(this, 'autoplay', value); }

  get controls() { return booleanAttribute.get(this, 'controls'); }
  set controls(value) { booleanAttribute.set(this, 'controls', value); }

  get loop() { return booleanAttribute.get(this, 'loop'); }
  set loop(value) { booleanAttribute.set(this, 'loop', value); }

  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }

  get poster() { return stringAttribute.get(this, 'poster'); }
  set poster(value) { stringAttribute.set(this, 'poster', value); }

  get preload() { return stringAttribute.get(this, 'preload'); }
  set preload(value) { stringAttribute.set(this, 'preload', value); }
  /* c8 ignore stop */
}
