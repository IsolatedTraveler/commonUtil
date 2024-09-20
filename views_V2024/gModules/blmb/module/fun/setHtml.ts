import { BLMB_TYPE } from 'GMBlmb';
import {BLMB_PAGE_ARR, footHtml, pageElem, pageHtml, titleHtml} from '../var';
import {getHtml} from './getHtml';

export function setHtml() {
  pageElem.innerHTML = pageHtml + `<input type="hidden" data-name="id" data-type="${BLMB_TYPE[2]}" name="id">` + titleHtml + getHtml(BLMB_PAGE_ARR) + footHtml + '</page>';
}
