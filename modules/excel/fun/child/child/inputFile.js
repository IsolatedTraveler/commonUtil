import { inputFile } from "../../../var/elem";
import { fileChange } from "./child/index";

export function getInputFile() {
  if (!inputFile) {
    inputFile = document.createElement('input')
    inputFile.setAttribute('type', 'file')
    inputFile.setAttribute('multiple', true)
    inputFile.onchange = fileChange
  }
}