
export function readSfzCard(mkbh = "020302", dm = "13") {
  let fun = system.readidcard_lx;
  if (fun && typeof fun === "function") {
    let layerIndex = that.loading();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 0);
    }).then((e) => {
      let readCardType = (that.paramget(mkbh, dm) || "").split("-")[0],
        res = JSON.parse(getSystemVal("readidcard_lx", [readCardType]));
      that.loaded(layerIndex);
      if (res.code == "1") {
        return res.data;
      } else {
        w.layui.layer.msg(res.msg);
        return Promise.reject();
      }
    });
  } else {
    w.layui.layer.msg("该浏览器暂未提供该方法，请联系运营商");
  }
  return Promise.reject();
}