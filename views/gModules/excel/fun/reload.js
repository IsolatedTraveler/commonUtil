// eslint-disable-next-line no-unused-vars
import { rowKeys, zbData, czlx, dataObj, tableSelectVal, tableSelectKey, colSelectVal, colSelectKey } from "../var/index";
import { cols, rows } from "../var/index";
import { setCol } from "./child/index";
export function reload(config) {
  rowKeys = {}
  rows = []
  cols[0] = rows
  zbData = []
  dataObj = {}
  tableSelectVal = {}
  tableSelectKey = []
  colSelectVal = {}
  colSelectKey = []
  czlx = config.czlx || 'hbbg'
  setCol('_文件名')
  setCol('_表名')
  setCol('_表序号')
}