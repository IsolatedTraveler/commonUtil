import type {TreeNode} from '../../../main';
import {alertMsg} from '../../common/pop';

/**
 * @description 初始化树形数据结构
 * @param data 数据源
 * @param idKey 主键字段，默认'id'
 * @param parentIdKey 父键字段，默认'fid'
 * @returns 初始化后的树形数据
 */
export function arrToTree<T extends TreeNode>(data: T[], idKey: keyof T = 'id', parentIdKey: keyof T = 'fid'): T[] {
  try {
    if (data.length < 2) return data;
    // 使用一个映射来存储所有节点，键为id，值为节点对象
    const nodeMap = new Map<T[keyof T], T>();
    const tree: T[] = [];

    // 遍历数据，填充nodeMap并处理根节点
    data.forEach(item => {
      // 保存节点到映射中
      if (nodeMap.has(item[idKey])) {
        throw new Error(`不能有两个相同的主键【${item[idKey]}】。`);
      }
      nodeMap.set(item[idKey], {...item, children: item.children || []}); // 每个节点初始化一个空的children数组
    });

    // 构建树形结构，通过pid找到父节点并添加子节点
    data.forEach(item => {
      const parentId = item[parentIdKey];
      const node = nodeMap.get(item[idKey])!;
      if (parentId && nodeMap.has(parentId)) {
        const parentNode = nodeMap.get(parentId)!; // 确信parentId存在
        parentNode.children!.push(node);
      } else {
        tree.push(node); // 确信item[idKey]存在
      }
    });
    return tree;
  } catch (e: any) {
    alertMsg(e);
    return data;
  }
}
