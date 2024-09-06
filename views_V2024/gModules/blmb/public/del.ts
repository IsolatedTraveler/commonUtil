import {BLMB_IDS} from '../var';

export function del(id: string, v: any) {
  return BLMB_IDS[id].del(v);
}
