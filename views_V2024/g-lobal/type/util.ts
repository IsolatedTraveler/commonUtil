export type GLobalResCode = -1 | 0 | 1
export interface GLobalRes {
  code: GLobalResCode
  message?: string
  data: any
}
export interface TreeNode {
  state?: 'closed'
  children?: TreeNode[]
  [key: string]: any
}