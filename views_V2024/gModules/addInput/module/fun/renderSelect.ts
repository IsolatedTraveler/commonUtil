import { TableColSelect } from "GMAddInput";

export function renderSelect({ data, id = 'id', mc = 'mc', field }: TableColSelect, _i: number) {
  return `<select name="${field}">${data.map(it => `<option value="${it[id]}">${it[mc]}</option>`).join('')}</select>`
}