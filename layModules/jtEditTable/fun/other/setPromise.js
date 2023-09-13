// eslint-disable-next-line no-unused-vars
import { table_promise, table_resolve } from "../../var/index";
import { endRender, startRender } from "./changeIsInit";
function getPromise() {
  return table_promise = new Promise((resolve, reject) => {
    table_resolve = resolve
  })
}
export function setPromise(name) {
  startRender(name);
  (table_promise || Promise.resolve()).then(getPromise).finally(() => endRender(name))
  return table_promise
}