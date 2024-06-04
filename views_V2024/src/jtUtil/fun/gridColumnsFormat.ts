export function gridColumnsFormat(arr: any[][], defWidth?: number, option: any = {}) {
  return arr.map(col => col.map((columnDef: any) => {
    const [field, title = '', width, align = 'cente', rowspan = 1, colspan = 1, sortable = false] = columnDef
      , obj: any = {
        ...option,
        field,
        title,
        align,
        sortable,
        rowspan,
        colspan
      }
    if (width || defWidth) {
      obj.width = width || defWidth
    }
    if (width) {
      obj.formatter = (v: string) => {
        if (v && (200 / 14 * v.length > width)) {
          return `<span title=${v}>${v}</span>`
        }
        return v
      }
    }
    return obj
  })
  )
}