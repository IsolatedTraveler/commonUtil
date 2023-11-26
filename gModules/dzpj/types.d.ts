declare global {
  // 开票来源   门诊 | 住院 | 挂号
  type DzPjKpLy = 'mz' | 'zy' | 'gh'
  // 开票类型   开票 | 退票
  type DzPjKpLx = 'kp' | 'tp'
  type KpPzLx = {
    [index in DzPjKpLy]: string
  }
  type DzPjKpPz = {
    [index in DzPjKpLx]: KpPzLx
  }
  let kppz: DzPjKpPz
}
export {

}