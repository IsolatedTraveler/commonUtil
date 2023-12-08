import { menu, setMenuVal } from "../var";

export function getKsxx(bmxz: string, fwdx: string) {
  var res = GLOBAL$BROWSER$.getSystemVal("ksxxget", [bmxz, fwdx]);
  res = JSON.parse(res);
  if (res.code == "1") {
    res = res.data;
  } else {
    w.layui.layer.alert("科室信息获取失败：" + res.msg);
    return;
  }
  return res;
}
export function getMenu(judge: boolean) {
  let i = that.loading("加载菜单中");
  GLOBAL$TEMP$.setPageTemp(menu, setMenu);
  that.loaded(i);
  return judge
    ? menu["cd-" + w.name.replace(that.val("webNameReg"), "")]
    : menu;
}
function setMenu() {
  return setMenuVal(menu || that.dealMenu(JSON.parse(GLOBAL$BROWSER$.getSystemVal("hiscdqx")).yhcd))
}