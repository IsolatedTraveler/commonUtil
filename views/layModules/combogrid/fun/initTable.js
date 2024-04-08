import { id, name, popElem, cols, height, size } from "../var/index";
import { loadData } from "./loadData";
import { setV } from "./setVal";
export function initTable() {
  layTable.on(`row(${name}${id}-table)`, setV)
  return layTable.render({
    elem: popElem.find('table'),
    cols,
    height,
    page: {
      layout: ['count', 'prev', 'page', 'next'],
      groups: 2,
      count: 0,
      limit: size || 5,
      limits: [5,10,20,30,100,1000,10000],
      curr: 1,
      jump: function(res, first) {
        if (!first) {
          loadData(res.curr, res.limit)
        }
      }
    }
  })
}