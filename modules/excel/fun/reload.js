// eslint-disable-next-line no-unused-vars
import { rowKeys, zbData, czlx, fbData } from "../var/index";
import { cols, rows } from "../var/index";
import { setCol } from "./child/index";
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