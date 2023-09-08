import { keys, len, vals } from "../../var/gdcs"
import { dcjfh, kbcs } from "../../var/kbcs"

export function getZf() {
  var { mzbx, qtbx, hjbx, bjbx, dqjf, dqzf } = kbcs,
    zf = mzbx + qtbx * 10 + hjbx * 20 + bjbx * 50, i = 0,
    ljf = zf + dqjf, bxzf = zf
  if (dqzf > 0) {
    i = keys.indexOf(dqzf)
  }
  while (ljf > keys[i]) {
    for (; len > i && ljf > keys[i]; i++) {
      if (vals[i] > 0) {
        zf += vals[i]
      }
      ljf = ljf - keys[i] + vals[i]
    }
    if (len <= i) {
      i = 0
    }
  }
  return { zf, bxzf }
}

export function getDcjfh() {
  dcjfh = dcjfh || keys.reduce((a, b) => a + b) - vals.filter(it => it < 0).reduce((a, b) => a + b)
  return dcjfh
}
var zfjl = [10, 20, 30, 40, 80, 100, 70, 50, 100], zfjlLen = zfjl.length
  , jfVal = [10, 10, 20, 50, 50, 50, 20, 50, -1], arr = []
// , zfDy = { 10: '青铜宝箱', 20: '黄金宝箱', 50: '铂金宝箱', '-1': '钻石宝箱' }
function getJf(dqjf, dqzfIndex = 0, mzbx = 0, qtbx = 0, hjbx = 0, bjbx = 0, zsbx = 0) {
  if (dqzfIndex > 10) {
    dqzfIndex = zfjl.indexOf(dqzfIndex)
  } else if (dqzfIndex < 0) {
    dqzfIndex = zfjlLen - 1
  }
  var zf = mzbx + qtbx * 10 + hjbx * 20 + bjbx * 50
  arr.push([dqjf, zfjl[dqzfIndex], mzbx, qtbx, hjbx, bjbx, zsbx, zf])
  if (zf > 0) {
    return zf + getBxsl(zf + dqjf, dqzfIndex, dqzfIndex, zsbx)
  }
  // console.log(dqzfIndex, `${zfjl[dqzfIndex]}积分${zfDy[jfVal[dqzfIndex]]}`, dqjf)
  return zf
}
function getBxsl(zf, dqzfIndex = 0, sl = 0, zsbx = 0, mzbx = 0, qtbx = 0, hjbx = 0, bjbx = 0) {
  if (zf >= zfjl[dqzfIndex]) {
    for (; dqzfIndex < zfjlLen && zf >= zfjl[dqzfIndex]; dqzfIndex++) {
      zf -= zfjl[dqzfIndex]
      if (jfVal[dqzfIndex] === 10) {
        qtbx += 1
      } else if (jfVal[dqzfIndex] === 20) {
        hjbx += 1
      } else if (jfVal[dqzfIndex] === 50) {
        bjbx += 1
      } else {
        zsbx += 1
      }
    }
    return getBxsl(zf, 0, dqzfIndex == 9 ? 0 : dqzfIndex, zsbx, mzbx, qtbx, hjbx, bjbx)
  }
  return getJf(zf, sl, mzbx, qtbx, hjbx, bjbx, zsbx)
}
function calc(dqjf, dqzfIndex = 0, mzbx = 0, qtbx = 0, hjbx = 0, bjbx = 0, zsbx = 0) {
  arr = []
  var zf = getJf(dqjf, dqzfIndex, mzbx, qtbx, hjbx, bjbx, zsbx)
  return zf
}
function getZdBl(bl = 3, dqjf, dqzfIndex) {
  var a = 999990, zf = 0
  while (a > 500) {
    var temp
    zf = calc(dqjf, dqzfIndex, a, 0, 0, 0)
    temp = Math.min(zf / a, bl)
    if (temp != bl) {
      console.warn(a, zf, temp)
      console.log(bl)
      bl = temp
    }
    a -= 10
  }
  return bl
}
var bl = 3
zfjl.forEach((dqzf, dqzfIndex) => {
  var dqjf = 10
  while (dqjf < dqzf) {
    bl = getZdBl(bl, dqjf, dqzfIndex)
    console.log('一次循环完毕', dqjf, dqzf)
    dqjf += 10
  }
})
console.log(bl)