import {BLMB_PAGE_ARR, footHtml, pageElem, pageHtml, titleHtml} from '../var';
import {getHtml} from './getHtml';

export function setHtml() {
  pageElem.innerHTML = pageHtml + titleHtml + getHtml(BLMB_PAGE_ARR) + footHtml + '</page>';
}
