interface TreeNode {
  state?: 'closed'
  children?: TreeNode[]
  [key: string]: any
}
/**
 * @description 初始化树形数据结构
 * @param data 数据源
 * @param idKey 主键字段，默认'id'
 * @param parentIdKey 父键字段，默认'fid'
 * @param initialStateClosed 是否初始状态为关闭，默认false
 * @returns 初始化后的树形数据
 */
export function initTreedata<T extends TreeNode>(
  data: T[],
  idKey: keyof T = 'id',
  parentIdKey: keyof T = 'fid',
  initialStateClosed: boolean = false
): T[] {
  try {
    const tree = GLOBAL$UTIL$V2024$.arrToTree(data, idKey, parentIdKey)
    if (initialStateClosed)
      setInitialState(tree)
    return tree;
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
    return data
  }
}
/**
 * @description 递归设置节点的初始状态为关闭
 * @param nodes 节点数组
 */
function setInitialState<T extends TreeNode>(nodes: T[]): void {
  nodes.forEach(node => {
    if (node.children && node.children.length) {
      node.state = 'closed';
      setInitialState(node.children);
    }
  })
}