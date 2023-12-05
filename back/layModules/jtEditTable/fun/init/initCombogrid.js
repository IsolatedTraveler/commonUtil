import { combogrid_key, def_data_tr, tr_templet_key } from "../../var/index"

export function initCombogrid(d) {
  if (d) {
    combogrid_key = Object.keys(d)
    combogrid_key.forEach(key => {
      let data = d[key]
      data.showElem = data.showElem || key
      if (data.showElem !== key) {
        console.error(`comborgrid[key]中的key(${key})必须等于combogrid[key].showElem(${data.showElem})或combogrid[key].showElem为空`)
      } else {
        def_data_tr[key] = ''
        tr_templet_key.name[key] = true
        if (data.valElem) {
          def_data_tr[data.valElem] = ''
          tr_templet_key.name[data.valElem] = true
        }
      }
    })
  }
  return d
}