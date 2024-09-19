import {ajaxPost} from '../../../../xhr';
import {SYSTEM, XTCS, XTCS_URL} from '../var';
/**
 * @function paramget
 * 根据指定的模块代码获取参数配置或特定参数值。
 *
 * @param {string} mkdm - 模块代码，用于确定要获取的参数集。
 * @param {string | number | undefined} [bh=undefined] - 参数编号，如果提供，返回该编号对应的参数值；否则返回整个参数集合。
 *
 * 该函数首先检查全局`XTCS`对象中是否存在针对`mkdm`模块的参数配置。如果不存在，将发起一个异步请求到`XTCS_URL`，传递模块代码`mkdm`和一个空字符串作为参数，请求完成后将响应数据转化为对象存储在`XTCS`对象中，其中键是参数编号，值是参数配置字符串。
 *
 * 如果`bh`参数被提供，函数将返回对应编号的参数值；如果没有提供`bh`参数，函数将返回整个参数配置对象。
 *
 * 注意：此函数使用Promise处理异步操作，因此在调用此函数时应适当处理返回的Promise。
 */
export function paramget(mkdm: string, bh: string | number | undefined = undefined) {
  if (!XTCS[mkdm]) {
    let res:any
    if (SYSTEM) {
      res = SYSTEM.paramget(mkdm);
    }
    if (res) {
      XTCS[mkdm] = Promise.resolve(JSON.parse(res));
    } else {
      XTCS[mkdm] = ajaxPost(XTCS_URL, { mkdm, jqm: '' }).then(({ data = [] }) => {
         res = {};
        (data as any).forEach((it: any) => {
          res[it.xh] = it.csz;
        });
        return res;
      });
    }
  }
  return XTCS[mkdm].then((res: any) => {
    return bh ? res[bh] : res;
  });
}
