import { convertObjectToQueryString } from "../../../../url";
import { getSystemVal } from "./getSystemVal";
/**
 * @function bbPrint
 * 打印报表函数，用于生成并打印特定报告ID对应的报表。
 * 
 * @param {string} reportid - 报表的唯一标识符。
 * @param {any} obj - 包含报表参数的对象，将被转换为查询字符串。
 * @param {any} [printCs={}] - 可选参数，包含打印配置设置。
 * 
 * 此函数首先将传入的对象参数转换为查询字符串，然后创建一个JSON字符串，
 * 其中包含了报表ID、查询字符串参数、预览模式开关、打印机名称、页面左边界、
 * 页面上边界、样式ID以及任何额外的打印配置设置。最后，调用getSystemVal方法，
 * 传入'printreport'作为第一个参数，并将构造的JSON字符串作为第二个参数。
 */
export function bbPrint(reportid: string, obj: any, printCs: any = {}) {
  let param = convertObjectToQueryString(obj),
    data = JSON.stringify(
      Object.assign(
        {
          reportid,
          param,
          preview: "0",
          printer: "",
          left: "",
          top: "",
          styleid: "",
        },
        printCs
      )
    );
  return getSystemVal('printreport', [data])
}