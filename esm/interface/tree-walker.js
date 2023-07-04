import {
  DOCUMENT_NODE,
  DOCUMENT_FRAGMENT_NODE,
  ELEMENT_NODE,
  TEXT_NODE,
  CDATA_SECTION_NODE,
  COMMENT_NODE,
  SHOW_ALL,
  SHOW_ELEMENT,
  SHOW_CDATA_SECTION,
  SHOW_COMMENT,
  SHOW_TEXT
} from '../shared/constants.js';

import {PRIVATE, END, NEXT} from '../shared/symbols.js';

const isOK = ({nodeType}, mask) => {
  switch (nodeType) {
    case ELEMENT_NODE:
      return mask & SHOW_ELEMENT;
    case TEXT_NODE:
      return mask & SHOW_TEXT;
    case COMMENT_NODE:
      return mask & SHOW_COMMENT;
    case CDATA_SECTION_NODE:
      return mask & SHOW_CDATA_SECTION;
  }
  return 0;
};

/**
 * @implements globalThis.TreeWalker
 */
export class TreeWalker {
  constructor(root, whatToShow = SHOW_ALL) {
    this.root = root;
    this.whatToShow = whatToShow;
    this._currentNode = root;
    this._createNodes(root);
  }

  set currentNode(currentNode) {
    this._currentNode = currentNode;
    if (currentNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
      this._createNodes(currentNode);
    }
  }

  get currentNode() {
    return this._currentNode;
  }

  nextNode() {
    const $ = this[PRIVATE];
    this._currentNode = $.i < $.nodes.length ? $.nodes[$.i++] : null;
    return this._currentNode;
  }

  _createNodes(root) {
    let {[NEXT]: next, [END]: end} = root;
    if (root.nodeType === DOCUMENT_NODE) {
      const {documentElement} = root;
      next = documentElement;
      end = documentElement[END];
    }
    const nodes = [];
    while (next !== end) {
      if (isOK(next, this.whatToShow))
        nodes.push(next);
      next = next[NEXT];
    }
    this[PRIVATE] = {i: 0, nodes};
  }
}
