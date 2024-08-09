export interface ClodopPrintParam {
  title: string  // 预览标题
  defPrint: string // 默认打印机
  mrdyj: string // 默认打印机
  size: [string, string, string, string]// 纸张尺寸  [方向,宽度,高度,名称]
  bj1: string | number
  bj2: string | number
  val: string // 打印内容
  mode: [string, boolean] // 打印模式 [模式名称，模式值]
  dyms: '3' | '2' // 3  预览打印   2  确认打印   - 直接打印
  w: any   //  自定义window   可能来源于父路径
  msg: string  // 确认打印提示内容
}