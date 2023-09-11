import { getInputFile, reload, setCol } from "./child/index";
export function initRender() {
  getInputFile()
  reload()
  setCol('文件名')
  setCol('表名')
  setCol('表序号')
}