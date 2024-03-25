import { winName } from "../../allVar";
import { commonUtilName, menuWidow, setMenuWindow } from "../var/global";
export function getName(w: any) {
  let name = w.name
  if (name == winName) {
    setMenuWindow(w)
    return winName
  } else {
    if (w.parent[commonUtilName]) {
      try {
        setMenuWindow(w.parent[commonUtilName].getRouterW())
      } catch (e) {
        setMenuWindow(w)
      }
    } else {
      setMenuWindow(w)
    }
    return menuWidow.name
  }
}
export function getRouterW() {
  return menuWidow || w
}