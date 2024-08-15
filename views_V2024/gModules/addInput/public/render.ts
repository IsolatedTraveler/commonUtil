import { AddInputConfig } from "GMAddInput";
import { ADD_INPUT_IDS, id, setAddInutId } from "../var";

export function render(config: AddInputConfig) {
  setAddInutId(config)
  return ADD_INPUT_IDS[id]
}