export type Zdlb = 0 | 1 | 2 | 3 | 4
/**
* @description 数据来源说明
* @author 何波
* @date 2024-03-08 15:11:07
* @param {
*   0: 其他
*   1: 病生理状态
*   2: 西医(ICD10)
*   3: 中医
*   4: 西医(ICD11)
* } 
*/
export function dicZdlb(lb: string): Zdlb {
  return 0
}