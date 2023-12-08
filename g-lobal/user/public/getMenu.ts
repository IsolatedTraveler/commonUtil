import { getName } from "../../router"
import { setPageTemp } from "../../temp"
import { setMenu } from "../fun/setMenu"
import { menu } from "../var"


export function getMenu(judge: boolean) {
  setPageTemp(menu, setMenu)
  return judge ? menu['cd-' + getName(w)] : menu
}