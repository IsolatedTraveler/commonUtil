import { dealData } from "../fun/init/render/body";
import { dataProp } from "../var/index";

export function getData() {
  return dataProp.map(({ id, interface: jk }) => {
    return { data: layForm.val(id), jk: dealData(jk) }
  })
}