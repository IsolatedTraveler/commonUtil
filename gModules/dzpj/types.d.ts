declare global {
  // 开票来源   门诊 | 住院 | 挂号
  type DzPjKpLy = 'mz' | 'zy' | 'gh'
  // 开票类型   开票 | 退票
  type DzPjKpLx = 'kp' | 'tp'
  interface KpPzCs {
    url: string,
    bbid?: string
  }
  type KpPzLx = {
    [index in DzPjKpLy]: KpPzCs
  }
  type DzPjKpPz = {
    [index in DzPjKpLx]: KpPzLx
  }
}
export {

}