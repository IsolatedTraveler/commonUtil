// eslint-disable-next-line no-unused-vars
import { rowKeys, zbData, czlx, fbData } from "../var/index";
import { cols, inputFile, layerIndex, rows } from "../var/index";
import { setCol } from "./child";

function fileChange(e) {
  return Promise.all([].map.call(e.target.files, (it) => {
    console.log(it.name)
  })).then(() => { }).finally(() => {
    layer.close(layerIndex)
  })
}
export function reload(config) {
  rowKeys = {}
  rows = []
  cols[0] = rows
  zbData = []
  fbData = []
  czlx = config.czlx || 'hbbg'
  setCol('文件名')
  setCol('表名')
  setCol('表序号')
}
export function init(config) {
  if (!inputFile) {
    inputFile = document.createElement('input')
    inputFile.setAttribute('type', 'file')
    inputFile.setAttribute('multiple', true)
    inputFile.onchange = fileChange
  }
  reload(config)
}