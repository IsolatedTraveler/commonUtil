import { val } from "../fun/init"
import { setSelectOption } from "../layui/form"
import { promiseResove } from "../../var/init"
import { event } from "../../var/login"
function bindEvent() {
  let form = w.layui.form, pwd = ''
  form.verify({
    pass: function (value: string) {
      pwd = value
    },
    qrpass: function (value: string) {
      if (value !== pwd) {
        return '两次密码输入不一致'
      }
    }
  })
  form.on('submit(alertPwdSubmit)', function (res: any) {
    alertPwd(res.field)
  })
  $('.jt-top [jt-event]').on('click', function (this: any, e: any) {
    (event as any)[this.getAttribute('jt-event')]()
    e.stopPropagation()
  })
}
function topRender(options: any) {
  let form = w.layui.form, data = that.getConfig('xtxx'), user = that.getUser(), menu = options.menu || {}, id = menu.valId || 'id', show = menu.showId || 'bt'
  $('#userInfo').html(`<span>机构：${user.jgmc}</span><span>账号：${user.yhm}</span><span>姓名：${user.xm}</span>`)
  $('#head img').attr('src', GLOBAL$URL$.dealsUrl(data.icon, GLOBAL$URL$.getBaseUrl()))
  $('#head span').html(data.title)
  form.on('select(xtcd)', function (e: any) {
    if (e.value) {
      let param = e.data
      param.id && routerByData(param)
    }
  })
  setSelectOption({
    elem: '#xtcd',
    data: that.getMenu()._formatTreeData,
    valId: id,
    showId: show
  })
}
export function getTopMenuId(id: string, sjid: string) {
  let menu = that.getMenu()
  while (sjid !== '01' && sjid !== '' && sjid !== null) {
    id = sjid
    sjid = menu['cd-' + id].sjid
  }
  return id
}
export function routerByData(data: any, param: any = undefined) {
  that.router(getTopMenuId(data.id, data.sjid), data.id, data.bt, data.url, param)
}
export function alertPwd(data: any) {
  return GLOBAL$ENCRYPT$.getMd5().then((e: any) => {
    return that.commonQueryAsyncHttppost_callback(val('alertMMUrl'), { jmm: w.hex_md5(data.jmm), mm: w.hex_md5(data.xmm) }).then(res => {
      if (res.code == 1) {
        layui.layer.msg('密码修改成功，即将退出，请重新登录', { time: 2000 }, function () {
          that.logOut()
        })
      } else {
        layui.layer.alert('密码修改失败：' + res.message)
      }
    }).catch(function () {
      layui.layer.alert('未获取到当前用户信息，网络连接超时')
    })
  })
}
export function renderTop(options: any) {
  if (promiseResove) {
    promiseResove.then((e: any) => {
      bindEvent()
      topRender(options)
    })
  } else {
    bindEvent()
    topRender(options)
  }
}
export default {
  getTopMenuId,
  routerByData,
  alertPwd,
  renderTop
}