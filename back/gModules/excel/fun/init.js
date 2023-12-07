// eslint-disable-next-line no-unused-vars
import { fileChangeRes, inputFile, layerIndex } from "../var/index";
import { dealData } from "./dealData";
import { initEvent } from "./initEvent";
import { readTable } from "./readTable";
import { reload } from "./reload";

function fileChange(e) {
  return fileChangeRes = Promise.all([].map.call(e.target.files, readTable)).then(dealData).finally(() => layer.close(layerIndex))
}

export function init(config) {
  if (!inputFile) {
    inputFile = document.createElement('input')
    inputFile.setAttribute('type', 'file')
    inputFile.setAttribute('multiple', true)
    inputFile.onchange = fileChange
  }
  reload(config)
  initEvent()
}