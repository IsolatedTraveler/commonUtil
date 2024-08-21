import {AddInputConfig} from 'GMAddInput';
import {ADD_INPUT_IDS} from '../var';

export function render(config: AddInputConfig) {
  const id = $(config.elem)[0].dataset.id || '';
  if (id) {
    return ADD_INPUT_IDS[id];
  }
  return (ADD_INPUT_IDS[id] = new Render(config));
}
