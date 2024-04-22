import { alertMsg } from "../../layer";
import { dealsUrl, getBaseUrl, getParamsUrl } from "../../url";

export function openDialog(url: string, data: any, width: string | number, height: string | number, btn = ['确定', '取消']) {
  return new Promise((resolve, reject) => {
    if (url === 'xtcs.html') {
      url = dealsUrl('./webs/xtcs/xtcs.html', getBaseUrl())
    }
    if (!isNaN(width as number)) {
      width += 'px'
    }
    if (!isNaN(height as number)) {
      height += 'px'
    }
    url += getParamsUrl(Object.assign({ isShowPopup: true }, data))
    if (layui && layer) {
      layer.open({
        type: 2,
        title: '弹出层',
        content: url,
        btn,
        area: [width, height],
        shade: '0.3',
        success: function (layero: any) {
          const w = layero.find('iframe')[0].contentWindow, el = layero.find('.layui-layer-title')
          el.html(w.document.title)
          setTimeout(() => {
            el.html(w.document.title)
          }, 500);
        },
        yes: function (i: number) {
          layer.close(i)
          resolve('')
        },
        end: function (i: number) {
          reject()
        }
      })
    } else {
      alertMsg('当前页面未引入layui，暂未实现该方案')
    }
  })
}