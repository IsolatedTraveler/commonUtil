(function (w, d) {
  // excel公式生成
  // @CODE
  // eslint-disable-next-line no-undef
  w.excelGs = new Class()
})(window, document);
var tableName = '升级英雄资源';
((w, d) => {
  var zd = w.excelGs.getRowValByParam('D', '$A6/50+1', '2', tableName),
    zg = w.excelGs.getRowValByParam('D', '$B6/50', '2', tableName),
    val = w.excelGs.excelSum(zd, zg),
    v = w.excelGs.excelIf('||', [{ lx: 'null', val: ['$B6'] }, { lx: 'null', val: ['$A6'] }, '$A6>$B6-50'], null, val)
  console.log(v)
})(window, document);
((w, d) => {
  var zd = w.excelGs.getRowValByParam('E', '$A6/50+C6', '2', tableName),
    zg = w.excelGs.getRowValByParam('E', '$B6/50-1', '2', tableName),
    val = w.excelGs.excelSum(zd, zg),
    v = w.excelGs.excelIf('||', [{ lx: 'null', val: ['$B6'] }, { lx: 'null', val: ['$A6'] }, '$A6>$B6-50'], null, val)
  console.log(v)
})(window, document);

((w, d) => {
  var dqxh = 10,
    zddj = w.excelGs.getRowValBySerialNumber('B', `C${dqxh}`),
    zd = w.excelGs.getRowValByParam('D', `${zddj}/50+1`, '2', tableName),
    zg = w.excelGs.getRowValByParam('D', `$I${dqxh}/50`, '2', tableName),
    val = w.excelGs.excelSum(zd, zg),
    tj = [
      { lx: 'null', val: [`$B${dqxh}`] },
      { lx: 'null', val: [`$A${dqxh}`] },
      { lx: 'null', val: [`$I${dqxh}`] },
      `$A${dqxh}>$B${dqxh}`,
      zddj + `>$I${dqxh}-50`],
    zhc = w.excelGs.excelIf(null, [`D${dqxh}`], 0, `D${dqxh}`),
    v = w.excelGs.excelIf('||', tj, null, w.excelGs.excelSum([val, `-${zhc}`]))
  console.log(v)
})(window, document);
((w, d) => {
  var dqxh = 10,
    zddj = w.excelGs.getRowValBySerialNumber('B', `C${dqxh}`),
    zd = w.excelGs.getRowValByParam('E', `${zddj}/50`, '2', tableName),
    zg = w.excelGs.getRowValByParam('E', `$I${dqxh}/50-1`, '2', tableName),
    val = w.excelGs.excelSum(zd, zg),
    tj = [
      { lx: 'null', val: [`$B${dqxh}`] },
      { lx: 'null', val: [`$A${dqxh}`] },
      { lx: 'null', val: [`$I${dqxh}`] },
      `$A${dqxh}>$B${dqxh}`,
      zddj + `>$I${dqxh}-50`],
    zhc = w.excelGs.excelIf(null, [`E${dqxh}`], 0, `E${dqxh}`),
    v = w.excelGs.excelIf('||', tj, null, w.excelGs.excelSum([val, `-${zhc}`]))
  console.log(v)
})(window, document);
((w, d) => {
  var dqxh = 10,
    zddj = w.excelGs.getRowValBySerialNumber('B', `C${dqxh}`),
    zd = w.excelGs.getRowValByParam('E', `${zddj}/50`, '2', tableName),
    zg = w.excelGs.getRowValByParam('E', `$I${dqxh}/50-1`, '2', tableName),
    val = w.excelGs.excelSum(zd, zg),
    v = w.excelGs.excelIf(null, [`J${dqxh}`], null, val)
  console.log(v)
})(window, document);
