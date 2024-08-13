import { AddInputConfig } from "GMAddInput";
import { uuid } from "../../../g-lobal/util/public/uuid";
import { ADD_INPUT_IDS } from "../var";

export function render(config: AddInputConfig) {
  let id = $(config.elem)[0].dataset.id
  if (!id) {
    id = uuid()
    while (ADD_INPUT_IDS[id]) {
      id = uuid()
    }
    ADD_INPUT_IDS[id] = new Render(config)
  }
  return ADD_INPUT_IDS[id]
}