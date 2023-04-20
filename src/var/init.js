
export let that, webName, webNameReg, jse, promiseResove, promiseCore, BASE64, loadElem, msgElem, loadMsg, closeLoadEd
  , srcWEventInputNot = ':not([lay-submit],[disabled],[readonly],.layui-table-edit)'
  , srcWEventKbjbg = `input[type="text"]${srcWEventInputNot},input[type="password"]${srcWEventInputNot},textarea,td[data-edit],input[laydate][readonly],.layui-select-title input.jt-select:not(.layui-disabled)`, initPop = {
    // 库所在位置
    libSite: '/lib',
    // 自定义网站更目录
    webName: '/his/',
    // 登录页
    login: '../index.html',
    // 导航页
    router: '/router.html',
    // 首页
    index: '/index.html',
    // eslint-disable-next-line no-undef
    thirdBaseUrl: '',
    // 可编辑表格
    input: srcWEventKbjbg,
    // 生成对象名
    name: 'commonUtil',
    isBase64: false,
    isPwd: true
  },
  urlRegV = '/webs/|/public/|/lib/|/.+\\[^/].js|/[^/]+\\.html'
export default {
  initPop,
  that,
  promiseResove,
  webName,
  webNameReg,
  srcWEventKbjbg,
  loadElem,
  msgElem,
  loadMsg,
  closeLoadEd,
  promiseCore,
  urlRegV
}