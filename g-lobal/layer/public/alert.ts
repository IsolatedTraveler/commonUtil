export function alertMsg(msg: string, judge: boolean = true) {
  judge && window.layer.alert(msg)
}