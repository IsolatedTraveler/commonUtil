import {BLMB_IDS} from '../var';

export function reload(id: string, v: any) {
  return BLMB_IDS[id].reload(v);
}
