export function getXzqhmc(dm: string) {
  return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magic/yy10-ywjc/01/10/s-xzqh-qc', { dm }).then(({ data: { list = [] } }) => {
    return [...new Set(list.map((it: any) => it.mc))].join('')
  })
}