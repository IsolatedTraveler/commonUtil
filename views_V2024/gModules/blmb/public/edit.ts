import {BLMB_IDS} from '../var';
import {keys} from './keys';

export function edit(id: string, judge: boolean) {
  if (id) {
    return BLMB_IDS[id].edit(judge);
  }
  keys().map(key => {
    BLMB_IDS[key].edit(judge);
  });
}
