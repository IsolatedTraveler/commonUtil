import { toYpcg } from "../fun"

interface Cd {
  name: string
  method: Function
  icon: string
  menuid?: string
  width?: string
}
export function ypcg(an: Array<Cd>) {
  an.push({
    name: '药品采购',
    method: toYpcg,
    icon: 'icon-extend-view'
  })
  return an
}