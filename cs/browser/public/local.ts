export function local(name: string, val: any = undefined) {
  if (val === undefined) {
    val = JSON.parse(GLOBAL$BROWSER$.getSystemVal("cookieget", [name]));
    val = val ? val.data : val;
    val = val ? val.result : val;
    return JSON.parse(val || null);
  } else if (val === null) {
    GLOBAL$BROWSER$.getSystemVal("cookiedelete", [name]);
  } else {
    GLOBAL$BROWSER$.getSystemVal("cookiepost", [name, JSON.stringify(val)]);
  }
}
export function getLocalInfo() {
  try {
    return JSON.parse(GLOBAL$BROWSER$.getSystemVal("ExeCSUI", ["040003"])).data;
  } catch (e) {
    return {};
  }
}