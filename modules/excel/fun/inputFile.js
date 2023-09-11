import { inputFile } from "../var/elem";

export function getInputFile() {
  if (!inputFile) {
    inputFile = document.createElement('input')
    inputFile.setAttribute('type', 'file')
    inputFile.setAttribute('multiple', true)
  }
}