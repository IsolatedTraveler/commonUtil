import { alertMsg, arrToTree } from "../../../g-lobal"
import { setInitialState } from "../fun";
import { TreeNode } from "../type";

/**
 * @description 初始化树形数据，将扁平化的数据转换为树形结构。
 * @param data - 要转换的数据数组。
 * @param idKey - 数据中表示节点ID的键名，默认为 'id'。
 * @param parentIdKey - 数据中表示父节点ID的键名，默认为 'fid'。
 * @param initialStateClosed - 是否将树的初始状态设置为关闭，默认为 false。
 * @returns 转换后的树形数据。
 */
export function initTreedata<T extends TreeNode>(
  data: T[],
  idKey: keyof T = 'id',
  parentIdKey: keyof T = 'fid',
  initialStateClosed: boolean = false
): T[] {
  const tree = arrToTree(data, idKey, parentIdKey)
  if (initialStateClosed)
    setInitialState(tree)
  return tree;
}