export interface TreeNode {
  state?: 'closed'
  children?: TreeNode[]
  [key: string]: any
}