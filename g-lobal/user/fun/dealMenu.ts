import { formatTreeData } from "../../util"

export function dealMenu(menu: any) {
  if (menu) {
    menu = formatTreeData(menu, 'id', 'sjid', 'cd-')
    if (menu.length === 1) {
      let a = menu[0]
      if (a && a.sjid && a.jtchild && a.jtchild.length) {
        menu = a.jtchild
        menu.__proto__ = a.__proto__
      }
    }
  }
  return menu
}