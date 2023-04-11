import { addField, def_data_tr, skin_bar, skin_temp, tr_templet_key } from "../../var/index"

export function setCol(col = {}) {
  let {field, templet, toolbar, skin = ''} = col
  skin = [skin]
  if (field) {
    def_data_tr[field] = ''
    if (templet) {
      tr_templet_key.name[field] = true
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
  def_data_tr = {}
  tr_templet_key = {name: {}, nameH: {}}
  if (addField) {
    addField.forEach(key => {
      def_data_tr[key] = ''
    })
  }
  return arr.map((it = []) => {
    return it.map(setCol)
  })
}
export function setTemple(arr, key) {
  if (arr) {
    arr.forEach(it => {
      tr_templet_key[key][it] = true
    })
  }
}