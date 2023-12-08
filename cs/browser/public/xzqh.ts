export function xzqh(xzqh: string) {
  let res = JSON.parse(GLOBAL$BROWSER$.getSystemVal("xzqhmget", [xzqh]));
  if (res.code === "1") {
    return res.data;
  } else {
    w.layui.layer.alert("行政区划获取失败：" + res.msg);
    return;
  }
}
export function getXzqh(gjz: string, pageNumber: string, pageSize: string) {
  let res = JSON.parse(GLOBAL$BROWSER$.getSystemVal("xzqhget", [gjz, pageNumber, pageSize]));
  if (res.code === "1") {
    return res.data;
  } else {
    return;
  }
}
export function zxzqhget(xzqh: string) {
  let res = JSON.parse(GLOBAL$BROWSER$.getSystemVal("zxzqhget", [xzqh]));
  if (res.code === "1") {
    return res.data;
  } else {
    w.layui.layer.alert("行政区划获取失败：" + res.msg);
    return;
  }
}