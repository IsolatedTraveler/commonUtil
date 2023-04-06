import { combogrid_key, def_data_tr, tr_templet_key } from "../../var/index"

export function initCombogrid(d) {
  if (d) {
    combogrid_key = Object.keys(d)
    combogrid_key.forEach(key => {
      let data = d[key]
      data.valElem = data.valElem || key
      if (data.valElem !== key) {
        console.error(`comborgrid[key]中的key必须等于combogrid[key].valElem或combogrid[key].valElem为空`)
      } else {
        def_data_tr[key] = ''
        tr_templet_key[key] = {}
        if (data.mcElem) {
          def_data_tr[data.mcElem] = ''
          tr_templet_key[key].name = [data.mcElem]
        }
      }
    })
  }
  return d
}