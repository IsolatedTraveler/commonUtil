import { data, def_data_tr } from "../../var/index";

export function trDataV(i, key, v) {
  let trData = data[i] || def_data_tr
  if (key === undefined) {
    if (v === undefined) {
      return trData
    } else {
      data[i] = v
    }
  } else {
    if (v === undefined) {
      return trData[key]
    } else {
      trData[key] = v
    }
  }
}