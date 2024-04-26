
export function readSfzCard(mkbh = "020302", dm = "13") {
  let layerIndex = that.loading();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, 0);
  }).then((e) => {
    let readCardType = (that.paramget(mkbh, dm) || "").split("-")[0],
      res = JSON.parse(GLOBAL$BROWSER$.getSystemVal("readidcard_lx", [readCardType]));
    that.loaded(layerIndex);
    if (res.code == "1") {
      return res.data;
    } else {
      w.layui.layer.msg(res.msg);
      return Promise.reject();
    }
  })
}