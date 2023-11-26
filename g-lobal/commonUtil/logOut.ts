import { system } from "../var";

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
    alert('退出系统失败')
  }
}