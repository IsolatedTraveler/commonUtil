// eslint-disable-next-line no-unused-vars
import { table_promise, table_resolve } from "../../var/index";
import { endRender, startRender } from "./changeIsInit";
function getPromise() {
  return new Promise((resolve, reject) => {
    table_resolve.push(resolve)
  })
}
export function setPromise(name) {
  startRender(name)
  var temp = (table_promise[0] || Promise.resolve())
  table_promise = getPromise()
  temp.then(() => table_promise).finally(() => endRender(name))
  return table_promise
}