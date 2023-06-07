export function ajaxError({ message, i }, { isShowLoad, msg } = {}, res) {
  isShowLoad && that.loaded(i);
  if (msg) {
    that.alertMsg(msg + message);
  }
  return res
}
export function ajaxDealData(res, i, option, errCallBack, callBack) {
  if (res.code == 1 || res.code === undefined) {
    if (option.isShowLoad) {
      that.loaded(i);
    }
    return callBack ? callBack(res) : res
  } else {
    res = ajaxError({ message: res.message, code: 0, i }, option, res);
    return errCallBack ? errCallBack(res) : res
  }
}