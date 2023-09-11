import { inputFile } from "../var";
import { fileChange, reload } from "./child/index";

export function init(config) {
  if (!inputFile) {
    inputFile = document.createElement('input')
    inputFile.setAttribute('type', 'file')
    inputFile.setAttribute('multiple', true)
    inputFile.onchange = fileChange
  }
  reload(config)
}
