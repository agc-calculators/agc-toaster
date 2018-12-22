
// AgcToaster: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-toaster.core.js';
import {
  AgcToaster
} from './agc-toaster.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcToaster
  ], opts);
}
