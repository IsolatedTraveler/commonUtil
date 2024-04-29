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
    if (data.length < 2) return data;
    // 使用一个映射来存储所有节点，键为id，值为节点对象
    const nodeMap = new Map<T[keyof T], T>();
    const tree: T[] = [];

    // 遍历数据，填充nodeMap并处理根节点
    data.forEach(item => {
      // 保存节点到映射中
      nodeMap.set(item[idKey], { ...item, children: item.children || [] }); // 每个节点初始化一个空的children数组
    });

    // 构建树形结构，通过pid找到父节点并添加子节点
    data.forEach(item => {
      const parentId = item[parentIdKey];
      const node = nodeMap.get(item[idKey])!;
      if (parentId && nodeMap.has(parentId)) {
        const parentNode = nodeMap.get(parentId)!; // 确信parentId存在
        parentNode.children = parentNode.children || [];
        parentNode.children.push(node);
      } else {
        tree.push(node); // 确信item[idKey]存在
      }
    });
    if (initialStateClosed) {
      setInitialState(tree)
    }
    return tree;
  } catch (e: any) {
    GLOBAL$LAYER$V2024$.alertMsg(e.message || e)
    return []
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