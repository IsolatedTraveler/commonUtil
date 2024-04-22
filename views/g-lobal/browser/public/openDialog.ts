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
    url += getParamsUrl(data)
    if (layui && layer) {
      layer.open({
        type: 2,
        title: '',
        content: url,
        btn,
        area: [width, height],
        shade: '0.3',
        success: function (layero: any) {
          setTimeout(() => {
            layero.find('.layui-layer-title').html(layero.find('iframe')[0].contentWindow.document.title)
          }, 500);
        },
        yes: function (i: number) {
          console.log('yes', i)
          resolve('')
        },
        cancel: function (i: number) {
          console.log('cancel', i)
          resolve('')
        },
        end: function (i: number) {
          console.log('end', i)
          reject()
        }
      })
    } else {
      alertMsg('当前页面未引入layui，暂未实现该方案')
    }
  })
}