export function login(url: string, data: any, dealResult: any) {
  let mm = data.mm,
    layerIndex = that.loading();
  that.val("isMd5", true);
  that.init().then(() => {
    data.mm = w.hex_md5(data.mm);
    let res = JSON.parse(getSystemVal("login", [JSON.stringify(data)]));
    that.dealLogin(res, data, mm, dealResult);
    that.loaded(layerIndex);
  });
}