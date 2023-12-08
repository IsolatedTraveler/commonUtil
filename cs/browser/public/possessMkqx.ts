export function possessMkqx(mkbh: string, dm: string = '') {
  var res = GLOBAL$BROWSER$.getSystemVal("mkqxhas", [mkbh, dm]);
  res = JSON.parse(res);
  if (res.code == "1") {
    res = res.data.result;
  } else {
    w.layui.layer.alert("模块权限获取失败：" + res.msg);
    return;
  }
  return res;
}