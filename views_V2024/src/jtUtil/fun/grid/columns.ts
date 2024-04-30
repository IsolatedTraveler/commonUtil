export function gridColumnsFormat(arr: any[][], fitColumns?: boolean) {
  return arr.map(colGroup =>
    colGroup.map((columnDef: any) => {
      const [field, title = '', width, align = 'cente', rowspan, colspan, sortable = false] = columnDef
        , obj: any = {
          field,
          title,
          align,
          sortable,
          rowspan,
          colspan
        }
      if (width || !fitColumns) {
        obj.width = width || 56
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