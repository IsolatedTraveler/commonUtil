import {BlmbMxCol} from 'GMBlmb';
import {BLMB_IDS} from '../var';

export function add(id: string, col: BlmbMxCol) {
  return BLMB_IDS[id].add(col);
}
