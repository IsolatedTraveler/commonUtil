import { alertMsg } from "../../layer";
import { dealsUrl, getBaseUrl, getParamsUrl } from "../../url";
function setCloseFun(i: number, w: any, resolve: any, btn = 1) {
  that.closeFun = () => {
    layer.close(i)
    resolve(btn)
  }
  if (w && w.$) {
    w.$('#layerBtn .btn').eq(btn - 1).click();
  }
}
export function openDialog(url: string, data: any, width: string | number, height: string | number, btn = ['确定', '取消'], title?: string) {
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
    url += '?' + getParamsUrl(Object.assign({ isShowPopup: true }, data))
    if (layui && layer) {
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
          layer.close(loadIndex)
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
      layer.open(param)
      loadIndex = layer.load(2, { time: 30 * 1000, shade: 0.3 })
    } else {
      alertMsg('当前页面未引入layui，暂未实现该方案')
    }
  })
}