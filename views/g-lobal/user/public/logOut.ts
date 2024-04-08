import { commonUtilName, system, winName } from "../../allVar"
import { exited } from "./exited"

export function logOut() {
  if (system) {
    system.logOut()
  } else {
    exit()
  }
}
export function exit() {
  if (system) {
    system.exit()
  } else {
    if (w.name == winName) {
      exited()
    } else {
      let a = w.open('', winName, '')
      if (a[commonUtilName]) {
        a[commonUtilName].exit()
      } else {
        exited()
      }
    }
  }
}