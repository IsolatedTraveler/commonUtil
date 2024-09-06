import type {BlmbConfig} from 'GMBlmb';
import {reload} from './reload';
import {pageElem} from '../var';
import {initEvent} from '../fun';

export function render(config: BlmbConfig) {
  reload(config);
  $(config.elem).append(pageElem);
  initEvent();
}
