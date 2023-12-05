(function (w, d) {
  // excel公式生成
  // @CODE
  // eslint-disable-next-line no-undef
  w.excelGs = new Class()
})(window, document);
var tableName = '升级英雄资源', dqxh = 10, ckxh = 2;
function setVal(zd, zg, xh, zddj, zgdj, zhc) {
  var v = window.excelGs.excelSum(zd, zg),
    tj = [
      { lx: 'null', val: [`$B${xh}`] },
      { lx: 'null', val: [`$A${xh}`] },
      zddj + `>${zgdj}-50`
    ]
  if (zhc) {
    v = window.excelGs.excelSum([v, zhc])
    tj = tj.concat([
      { lx: 'null', val: [`$I${dqxh}`] },
      `$A${dqxh}>$B${dqxh}`
    ])
  }
  return window.excelGs.excelIf('||', tj, null, v)
}
function getZyGdVal(zddj, zgdj, xh, zhc) {
  var zd = window.excelGs.getRowValByParam('E', `${zddj}/50`, '2', tableName),
    zg = window.excelGs.getRowValByParam('E', `${zgdj}/50-1`, '2', tableName)
  return setVal(zd, zg, xh, zddj, zgdj, zhc)
}
function getQjGdVal(zddj, zgdj, xh, zhc) {
  var zd = window.excelGs.getRowValByParam('D', `${zddj}/50+1`, '2', tableName),
    zg = window.excelGs.getRowValByParam('D', `${zgdj}/50`, '2', tableName)
  return setVal(zd, zg, xh, zddj, zgdj, zhc)
}
((w, d) => {
  // 游戏所需金钱
  var zddj = w.excelGs.getRowValBySerialNumber('B', `C${dqxh}`),
    zgdj = `I${dqxh}`,
    zhc = w.excelGs.excelIf(null, [`D${dqxh}`], 0, `-D${dqxh}`)
  console.log(getQjGdVal(`$A${ckxh}`, `$B${ckxh}`, ckxh))
  console.log(getQjGdVal(zddj, zgdj, dqxh, zhc))
  // 游戏所需资源
  zhc = w.excelGs.excelIf(null, [`E${dqxh}`], 0, `-E${dqxh}`)
  console.log(getZyGdVal(`$A${ckxh}`, `$B${ckxh}`, ckxh))
  console.log(getZyGdVal(zddj, zgdj, dqxh, zhc))
})(window, document);
((w, d) => {
  // 游戏单位/时间换算
  var ckl = `J${dqxh}`,
    ckz = w.excelGs.lookUp(ckl, 'A', 'C', [3, 27], '参数'),
    dw = w.excelGs.lookUp(ckl, 'A', 'B', [3, 27], '参数')
  console.log('=' + w.excelGs.excelIf(null, [ckl], null, `ROUND(J${dqxh}/${ckz}, 4)&${dw}`))
  console.log('=' + w.excelGs.excelIf(null, [ckl], null, `ROUND(${ckl}/参数!$G$2, 2)&"小时"`))
  console.log('=' + w.excelGs.excelIf(null, [ckl], null, `ROUND(${ckl}/参数!$G$2/24, 2)&"天"`))
})(window, document);