export function filterDicData(data) {
  try {
    var returndata = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].mj == 1) {
        returndata.push(data[i]);
      }
    }
    return returndata;
  } catch (e) {
    JsErrorTrace(e);
  }
}
