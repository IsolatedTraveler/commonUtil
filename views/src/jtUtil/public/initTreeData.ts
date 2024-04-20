export function initTreedata<T extends { [key: string]: any }>(
  data: T[],
  idKey: keyof T = 'id',
  parentIdKey: keyof T = 'fid',
  initialStateClosed: boolean = false
): T[] {
  try {
    if (!data.length) return [];

    const treeMap = {} as { [K in T[keyof T]]: T }; // 用于存储所有节点，快速查找
    const result: any[] = []; // 最终的树结构

    // 预处理数据，建立快速查找map
    data.forEach(item => {
      treeMap[item[idKey]] = { ...item, children: [] };
    });

    // 构建树
    data.forEach(node => {
      const { [parentIdKey]: parentId } = node;
      if (parentId === '') { // 根节点处理
        result.push(treeMap[node[idKey]]);
      } else {
        treeMap[parentId].children.push(treeMap[node[idKey]]);
      }
    });

    // 根据需求设置节点状态
    if (initialStateClosed) {
      result.forEach(node => {
        if (node.children.length) node.state = 'closed';
        recursiveSetState(node.children);
      });
    }

    return result;
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e)
    return []
  }
}

// 辅助函数，用于递归设置节点状态
function recursiveSetState<T extends {
  children: T[]
  state?: 'closed'
}>(nodes: T[]) {
  nodes.forEach(node => {
    if (node.children.length) {
      node.state = 'closed';
      recursiveSetState(node.children);
    }
  });
}