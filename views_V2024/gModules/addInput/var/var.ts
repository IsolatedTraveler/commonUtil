import { AddInputConfig } from "GMAddInput"
import { uuid } from "../../../g-lobal/util/public/uuid"
import { ADD_INPUT_IDS } from "./const"

export let id: string
export function setAddInutId(config: AddInputConfig) {
  const str = 'addInput-xxxx-4xxx-yxxx'
  id = $(config.elem)[0].dataset.id || ''
  if (!id) {
    id = uuid(str)
    while (ADD_INPUT_IDS[id]) {
      id = uuid(str)
    }
    ADD_INPUT_IDS[id] = new Render(config)
  }
}