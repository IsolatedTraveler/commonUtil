export let system: any
function getJtPhisSystem() {
  let systemV = w.jthisJsObject || w.wdphisJsObject
  if (systemV) {
    system = systemV.jthis || systemV.wdphis
  }
}
getJtPhisSystem()