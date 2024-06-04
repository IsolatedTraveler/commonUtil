import { JtPage, JtTableParam, LayuiPage, LayuiTable, LayuiTableParam, LayuiTableRes } from "../type"
import { getTBody } from "./getTBody"
import { getTr } from "./getTr"
/**
 * @description 初始化并渲染一个 Layui 的表格组件，支持自定义列样式、数据处理逻辑及分页配置。
 *
 * @param {JtTableParam} param - 表格初始化参数对象。
 * @param {JtPage} [page={}] - 可选，分页相关参数对象，当需要联动分页时使用。
 * @returns {void} 无直接返回值，但会初始化并渲染表格到指定元素。
 */
export function initTable(param: JtTableParam, page: JtPage = {}): LayuiTable {
  // 行样式
  const rowClass = param.rowClass
    // table渲染完成后执行的方法
    , done = param.done
    // table渲染元素
    , elem = param.elem
    //  table渲染参数
    , tableParam: LayuiTableParam = {
      elem,
      cols: param.cols,
      id: param.name || '',
      height: param.height,
      disabled: param.disabled,
      data: param.data || [],
      done
    }
  // 根据数据对特定行追加行样式
  if (rowClass) {
    // table父级元素
    let pelem: JQuery = $(elem).parent()
    // table渲染完成后
    tableParam.done = function (res: LayuiTableRes, curr: number, count: number) {
      const data = res.data
        // 获取layUi.table渲染后的主体表格
        , tbody = getTBody(pelem)
      // 根据表格行数据设置行样式
      data.forEach((it, i) => {
        const rowClassName = rowClass(it, i)
        rowClassName && getTr(tbody, i).addClass(rowClassName)
      })
      // 判断在表格渲染完成后是否存在待执行事件
      if (param.done) {
        param.done(res, curr, count)
      }
    }
  }
  if (param.page) {
    tableParam.page = Object.assign({
      layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'],
      groups: 5,
      count: 0,
      limit: 20,
      limits: [10, 20, 50, 100, 200, 500, 1000, 1500, 3000, 5000],
      curr: 1,
      // 当分页被切换时触发
      jump(res: LayuiPage, first: Boolean) {
        page.size = res.limit
        page.page = res.curr
        //首次不执行
        if (!first) {
          if (param.select) {
            // 通过关联表单加载
            $(param.select).find('[lay-submit]').trigger('click')
          } else if (param.getData) {
            // 通过提供的加载数据方法加载
            param.getData(page)
          }
        }
      }
    }, param.page)
  } else {
    tableParam.page = false
    tableParam.limit = 0
  }
  return window.layui.table.render(Object.assign(tableParam, param.cover))
}