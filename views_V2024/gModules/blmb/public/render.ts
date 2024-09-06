import type {BlmbConfig} from 'GMBlmb';
import {BLMB_IDS} from '../var';

export function render(config: BlmbConfig) {
  if (BLMB_IDS[config.id]) {
    BLMB_IDS[config.id].reload(config);
  } else {
    BLMB_IDS[config.id] = new Render();
    BLMB_IDS[config.id].render(config);
  }
  return BLMB_IDS[config.id];
}
