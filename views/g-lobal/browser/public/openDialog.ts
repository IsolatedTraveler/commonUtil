import { alertMsg } from "../../layer";
import { dealsUrl, getBaseUrl, getParamsUrl } from "../../url";
function setCloseFun(i: number, w: any, resolve: any, btn = 1) {
  if (w && w.$) {
    w.$('#layerBtn .btn').eq(btn - 1).click();
  }
  that.closeFun = () => {
    layer.close(i)
    resolve(btn)
  }
}
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
      var w: any
      layer.open({
        type: 2,
        title: '弹出层',
        content: url,
        btn,
        area: [width, height],
        shade: '0.3',
        success: function (layero: any) {
          var el = layero.find('.layui-layer-title')
          w = layero.find('iframe')[0].contentWindow
          el.html(w.document.title)
          setTimeout(() => {
            el.html(w.document.title)
          }, 500);
        },
        yes: (i: number) => setCloseFun(i, w, resolve),
        btn2: (i: number) => setCloseFun(i, w, resolve, 2),
        btn3: (i: number) => setCloseFun(i, w, resolve, 3),
        btn4: (i: number) => setCloseFun(i, w, resolve, 4),
        btn5: (i: number) => setCloseFun(i, w, resolve, 5),
        end: function (i: number) {
          reject()
        }
      })
    } else {
      alertMsg('当前页面未引入layui，暂未实现该方案')
    }
  })
}