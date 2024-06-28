import { LayModule } from "../../../main"

export function initLayui(items: LayModule[] = []) {
  if (window.layui) {
    return new Promise((resolve, reject) => {
      window.layui.use(items, resolve)
    })
  } else {
    return Promise.resolve()
  }
}