import { colSelectVal, fbData, primaryKey, qTable, zbData } from "../var/index";

function judgeEqual(zb, fb) {
  let len = primaryKey.length
  for (let i = 0; i < len; i++) {
    let key = primaryKey[i]
    if (zb[key] != fb[key]) {
      return false
    }
  }
  Object.keys(fb).forEach(key => {
    zb[key] = fb[key] || zb[key]
  })
  zb[colSelectVal['_备注']] = `修改数据：来自文件【${fb.c0}】中【${fb.c1}】第${fb.c2}条数据`
  return true
}
function judgeNull(it) {
  let len = primaryKey.length, judge
  for (let i = 0; i < len; i++) {
    let key = primaryKey[i]
    judge = judge || it[key]
  }
  return judge
}
// 合并表格
export function hbbg() {
}
// 对比合并表格
export function dbhbbg() {
  zbData = zbData.filter(judgeNull)
  fbData = fbData.filter(f => {
    return !zbData.filter(z => {
      return judgeEqual(z, f)
    }).length
  })
  zbData = zbData.concat(fbData.filter(it => {
    it[colSelectVal['_备注']] = `新增数据：来自文件【${it.c0}】中【${it.c1}】第${it.c2}条数据`
    return judgeNull(it)
  }))
  qTable.tableReload(zbData)
}