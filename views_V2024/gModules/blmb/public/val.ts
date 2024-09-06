import {BLMB_IDS} from '../var';

export function val(id: string, v: any) {
  return BLMB_IDS[id].val(v);
}
