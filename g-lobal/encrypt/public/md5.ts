export function getMd5() {
  if (w.hex_md5) {
    return Promise.resolve()
  } else {
    return that.init()
  }
}