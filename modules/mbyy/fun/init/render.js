// eslint-disable-next-line no-unused-vars
import { dataProp, pageElem } from "../../var/index"
import { renderBody } from "./render/body"
import { renderName } from "./render/name"
import { renderUrl } from "./render/url"

export function render(data) {
  var html
  document.title = data.title
  dataProp = []
  pageElem.addClass(data.class)
  pageElem.attr('style', data.style)
  if (data.name) {
    html = renderName(data.name)
  } else if (data.url) {
    html = renderUrl(data.url)
  } else {
    html = renderBody(data)
  }
  pageElem.html(html + '<div class="jt-flex-r xt"><button class="layui-btn layui-btn-sm" lay-submit lay-filter="submit">确定</button><button class="layui-btn layui-btn-sm" jt-event="close">取消</button></div>')
  layForm.render()
}