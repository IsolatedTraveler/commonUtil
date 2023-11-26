import { uuid } from "../../util";
import { setPageTemp } from "../temp/tempData";
export type LayerIndex = string | undefined
export function laoding(msg = undefined): LayerIndex {
  if (document.body) {
    let id = uuid()
    // setPageTemp()
    return id
  }
}
export function loaded(i: string) {

}