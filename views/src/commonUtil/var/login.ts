export let winName = 'jt-index', rw: any, event = {
  alertPwd() {
    that.openPop({
      title: '修改密码',
      elem: "#alertPwd",
      area: '20em',
      btn1: '提交',
      btn2: '取消'
    })
  },
  exit() {
    that.exit()
  },
  logout() {
    that.logOut()
  }
}