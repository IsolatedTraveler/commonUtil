import { TreeNode } from "../type";

/**
 * @description 递归设置节点的初始状态为关闭
 * @param nodes 节点数组
 */
export function setInitialState<T extends TreeNode>(nodes: T[]): void {
  nodes.forEach(node => {
    if (node.children && node.children.length) {
      node.state = 'closed';
      setInitialState(node.children);
    }
  })
}