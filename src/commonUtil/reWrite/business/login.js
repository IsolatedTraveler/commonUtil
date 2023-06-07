import { initPop, webName } from "../../var/init"
import { rw, winName } from "../../var/login"
function setMenuElemVal(id, title, url) {
  let elem = rw.$('#tabTitle')
  if (elem.length) {
    elem = elem.find(`[lay-id=${id}]`)
    if (elem.length) {
      const i = elem.index(), el = $(`#tabContent > :nth-child(${i + 1}) iframe`), src = el.attr('src')
      if (url !== src) {
        el.attr('src', url)
      }
      elem.trigger('click')
    } else {
      rw.layui.element.tabAdd('topMenu', { title, id, content: `<iframe frameborder="0" src="${url}"/>` })
      rw.layui.element.tabChange('topMenu', id)
    }
  } else {
    w.open(url, webName + '-' + that.uuid(), '', true)
  }
}
function chageTab(id, title, url, data) {
  if (url) {
    if (data) {
      url = that.getParamsUrl(data, that.dealsUrl(url, that.getHostUrl()))
    } else {
      url = that.dealsUrl(url, that.getHostUrl())
    }
  }
  setMenuElemVal(id, title, url)
}
function redirect(a, pid, id, title, url, data) {
  setTimeout(() => {
    if (a && a[that.val('name')]) {
      a[that.val('name')].router(pid, id, title, url, data)
    } else {
      redirect(a, pid, id, title, url, data)
    }
  }, 100);
}
function dealWebTabName(name, clear) {
  let tabName
  if (clear) {
    tabName = [name]
    w.name = name
  } else {
    tabName = that.session('webTabName') || []
    tabName = tabName.filter(it => {
      return it !== name
    })
    tabName.push(name)
  }
  that.session('webTabName', tabName)
}
export function dealLogin(res, data, mm, dealResult) {
  if (res.code == 1) {
    if (data.jzmm) {
      data.mm = mm
      that.local('yhxx', data)
    } else if (data.jzyh) {
      delete data.mm
      that.local('yhxx', data)
    }
    that.session('userinfo', dealResult ? dealResult(res.data) : res.data)
    that.router(winName, '', '首页', that.val('index'))
  } else {
    layui.layer.alert('登录失败：' + res.message, { enter: true })
  }
}
export function exiting(a) {
  a = a || w
  a.location.href = 'about:blank'
  a.opener = null
  a.open('', '_self')
  a.close()
}
export function getHexMd5() {
  if (w.hex_md5) {
    return Promise.resolve()
  } else {
    initPop.isMd5 = true
    return that.init()
  }
}
export function login(url, data, dealResult) {
  let i = that.loading()
  return getHexMd5().then(e => {
    let mm = data.mm
    data.mm = w.hex_md5(data.mm)
    return that.commonQueryAsyncHttppost_callback(url, data, { isNotGetUser: true }).then(res => {
      dealLogin(res, data, mm, dealResult)
      that.loaded(i)
    }).catch(e => {
      that.loaded(i)
      layui.layer.alert('登录失败，网络连接超时')
    })
  })
}
export function logOut() {
  that.exit(true)
}
function exited() {
  let data = that.session('webTabName') || [], url = that.dealsUrl(that.val('login'), that.getBaseUrl()), name = w.name;
  if (data.length) {
    data.filter(it => it != name).map(it => {
      return exiting(w.open('', it, '', true))
    })
  }
  if (location.href != url) {
    sessionStorage.clear();
    location.href = url;
  }
}
export function exit() {
  if (w.name == winName) {
    exited()
  } else {
    let a = w.open('', winName, '', true)
    if (a[that.name]) {
      a[that.name].exit()
    } else {
      exited()
    }
  }
}
export function router(pid, id, title, url, data) {
  // 自定义页面
  if (/jt-/.test(pid) && !id) {
    w.name = pid
    dealWebTabName(pid, true)
    location.href = that.dealsUrl(url, that.getHostUrl())
  } else {
    let name = webName + '-' + pid
    if (name === w.name) {
      id && chageTab(id, title, url, data)
    } else {
      dealWebTabName(name)
      const a = w.open(that.dealsUrl(that.val('route'), that.getHostUrl()), name, '', true)
      redirect(a, pid, id, title, url, data)
    }
  }
}
export default {
  getHexMd5,
  login,
  logOut,
  exit,
  router,
  exiting,
  dealLogin
}