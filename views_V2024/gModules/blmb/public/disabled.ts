import {BLMB_IDS} from '../var';
import {keys} from './keys';

export function disabled(id: string) {
  if (id) {
    return BLMB_IDS[id].disabled();
  }
  keys().map(key => {
    BLMB_IDS[key].disabled();
  });
}
