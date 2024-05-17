import { alertMsg } from "./alertMsg";
import { setCloseFun } from "../var";
import { convertToAbsoluteUrl } from "../../../../url/fun";
import { buildUrlWithQueryParams } from "../../../../url/public/buildUrlWithQueryParams";
import { getAppBaseUrl } from "../../../../url/public/getAppBaseUrl";
/**
 * @description 打开一个自定义的弹出对话框，并根据用户操作返回Promise结果。
 *
 * 此函数用于以iframe形式弹出一个包含指定URL的内容页面，允许传入额外数据、设置宽高、按钮和标题等，
 * 并根据用户点击的按钮执行不同的逻辑。支持通过Promise处理弹窗关闭后的回调。
 *
 * @param {string} url - 弹出页面的地址。
 * @param {any} data - 传递给弹出页面的数据对象。
 * @param {string | number} width - 弹窗宽度，数字会被转换为像素单位。
 * @param {string | number} height - 弹窗高度，数字会被转换为像素单位。
 * @param {Array<string>} [btn=['确定', '取消']] - 弹窗底部按钮的标签数组。
 * @param {string} [title] - 弹窗的标题，默认为'弹出层'。
 * @returns {Promise<any>} - 根据用户点击按钮的结果，异步返回操作结果或拒绝原因。
 */
export function openDialog(url: string, data: any, width: string | number, height: string | number, btn = ['确定', '取消'], title?: string) {
  return new Promise((resolve, reject) => {
    if (url === 'xtcs.html') {
      url = convertToAbsoluteUrl('./webs/xtcs/xtcs.html', getAppBaseUrl())
    }
    if (!isNaN(width as number)) {
      width += 'px'
    }
    if (!isNaN(height as number)) {
      height += 'px'
    }
    url += '?' + buildUrlWithQueryParams(Object.assign({ isShowPopup: true }, data))
    if (window.layui && window.layer) {
      var w: any, loadIndex: number
      const param: any = {
        type: 2,
        title: title || '弹出层',
        content: url,
        btn,
        area: [width, height],
        shade: 0.3,
        success: function (layero: any) {
          w = layero.find('iframe')[0].contentWindow
          window.layer.close(loadIndex)
          if (!title) {
            var el = layero.find('.layui-layer-title')
            el.html(w.document.title)
            setTimeout(() => {
              el.html(w.document.title)
            }, 500);
          }
        },
        end: reject
      }
      btn.forEach((it, j) => {
        const z = j + 1
        param[j === 0 ? 'yes' : `btn${z}`] = (i: number) => setCloseFun(i, w, resolve, z)
      })
      window.layer.open(param)
      loadIndex = window.layer.load(2, { time: 30 * 1000, shade: 0.3 })
    } else {
      alertMsg('当前页面未引入layui，暂未实现该方案')
    }
  })
}