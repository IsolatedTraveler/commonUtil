import { ajaxPost } from "../../../../xhr/public";
import { alertMsg } from "../../../pop";
import { MKQX, MKQX_URL } from "../var";

/**
 * @description 根据给定的模块编号(mkbh)和(可选的)模块细分代码(dm)，异步获取权限信息。
 * 首先尝试从缓存中获取权限信息，如果不存在，则发起异步请求获取并缓存结果。
 * 支持返回单个权限值或多个权限值的对象形式，取决于是否指定了细分代码(dm)。
 * 
 * @param {string} mkbh - 模块编号，用于获取权限信息的主标识。
 * @param {string} [dm] - 可选的模块细分代码，用于获取特定细分的权限信息。
 * @returns {Promise<string | Record<string, number>>} - 返回权限值（当有细分代码时）或权限对象（无细分代码时）的Promise。
 */
export function possessMkqx(mkbh: string, dm?: string): Promise<string | Record<string, string>> {
  const id = dm ? `${mkbh}-${dm}` : mkbh;
  if (MKQX[id]) {
    return MKQX[id]
  } else {
    return MKQX[id] = ajaxPost(MKQX_URL, { mkbh, dm }).then(res => {
      if (res.code === 1) {
        const list = res.data.list || []
        if (dm) {
          const firstItem = list[0];
          return firstItem ? String(firstItem.mr) : String(0);
        } else {
          return list.reduce((acc: any, item: any) => ({ ...acc, [item.dm]: String(item.mr) }), {});
        }
      } else {
        throw new Error(`获取权限失败: ${res.message}`);
      }
    }).catch(e => {
      alertMsg(e);
      return dm ? '0' : {}
    })
  }
}