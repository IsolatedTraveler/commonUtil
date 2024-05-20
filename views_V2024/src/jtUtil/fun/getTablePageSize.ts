import { LayuiPage } from "../type";
/**
 * 获取表格每页显示的记录数。
 * @param page - 分页配置对象或布尔值。如果是布尔值，则默认每页显示20条记录。
 * @returns 返回每页应显示的记录数。
 */
export function getTablePageSize(page?: LayuiPage | boolean): number {
  const defSize = 20
  if (!page) return defSize
  if (page === true) return defSize
  return page.limit || defSize
}