import { skin_bar, skin_temp } from "../../var/index"

export function setCol(col = {}) {
  let {field, templet, toolbar, skin = ''} = col
  skin = [skin]
  if (field) {
    if (templet) {
      skin.push(skin_temp)
    }
  }
  if (toolbar) {
    skin.push(skin_bar)
  }
  col.skin = skin.filter(it => it).join(' ')
  return col
}
export function setCols(arr = []) {
  return arr.map((it = []) => {
    return it.map(setCol)
  })
}