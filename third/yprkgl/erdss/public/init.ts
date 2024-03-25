export function init() {
  return GLOBAL$LAYER$.getLayui(['layer']).then(() => {
    return that
  })
}