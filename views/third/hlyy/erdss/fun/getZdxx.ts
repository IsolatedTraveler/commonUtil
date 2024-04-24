import { dicZdlb } from "./dic"

export function getZdxx(data: any) {
  return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magicJq/YY15/05/10/s-zdxx', { zyid: data.zyid }).then(({ data }) => {
    if (data) {
      data = data.list || []
      return data.map((it: any, i: number) => {
        return {
          diagnostic_seq_num: i == 0 ? 11 : (20 + i), // 诊断顺序号
          diagnosis_type_code: dicZdlb(it.zdlb), // 诊断类别代码
          diagnosis_name: it.jbmc,// 诊断名称
          diagnosis_code: it.jbdm // 疾病代码
        }
      })
    }
  })
}