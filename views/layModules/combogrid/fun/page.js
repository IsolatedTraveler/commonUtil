import { pageNumber, size, total } from "../var/index"
import { loadData } from "./loadData"

export function pageChange(a) {
  if (total > 0) {
    const c = Math.ceil(total / size)
    loadData((pageNumber - 2 * c + a) % c + c)
  }
}