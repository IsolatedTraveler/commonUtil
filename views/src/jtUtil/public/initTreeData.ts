interface TreeNode {
  state?: 'closed'
  children: TreeNode[]
  fid: string
  id: string
  [key: string]: any
}
export function initTreedata(
  data: TreeNode[],
  idKey: keyof TreeNode = 'id',
  parentIdKey: keyof TreeNode = 'fid',
  initialStateClosed: boolean = false
): TreeNode[] {
  try {
    if (!data.length) return [];

    // 使用一个映射来存储所有节点，键为id，值为节点对象
    const nodeMap = new Map();
    // 初始化最终的树结构数组
    const tree: TreeNode[] = [];

    // 遍历数据，填充nodeMap并处理根节点
    data.forEach(item => {
      // 保存节点到映射中
      nodeMap.set(item[idKey], { ...item, children: [] }); // 每个节点初始化一个空的children数组
    });

    // 构建树形结构，通过pid找到父节点并添加子节点
    data.forEach(item => {
      const parentNode = nodeMap.get(item[parentIdKey]);
      if (parentNode) {
        parentNode.children.push(nodeMap.get(item[idKey]));
      } else {
        tree.push(nodeMap.get(item[idKey]))
      }
    });
    if (initialStateClosed) {
      tree.forEach(node => {
        if (node.children.length) node.state = 'closed';
        recursiveSetState(node.children);
      });
    }
    return tree;
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e)
    return []
  }
}

// 辅助函数，用于递归设置节点状态
function recursiveSetState<T extends TreeNode>(nodes: T[]) {
  nodes.forEach(node => {
    if (node.children.length) {
      node.state = 'closed';
      recursiveSetState(node.children);
    }
  });
}