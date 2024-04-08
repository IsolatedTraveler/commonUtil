/* eslint-disable no-undef */
import { TBody, TBox, TMain } from "../../var/layui"
function setTBox(elem) {
  return elem.find(TBox).eq(0)
}
function getTBox(elem, box) {
  return setPageTemp(box, setTBox, elem)
}
function setTMain(box) {
  return box.find(TMain)
}
function getTmain(elem, box, main) {
  return setPageTemp(main, setTMain, getTBox(elem, box))
}
function setTbody(main) {
  return main.find(TBody)
}
function getTBody(elem, main, box, body) {
  return setPageTemp(body, setTbody, getTmain(elem, box, main))
}
function getTr(body, i) {
  return body.find('tr[data-index="' + i + '"]')
}
function tableInit(options, mx, res, pelem, layForm) {
  let selectElem = $(options.select), { filter = 'table', click, mxCallBack, mxclick } = options, zTable
  options.height = pelem.height()
  zTable = initTable(options, res.page)
  $(d).on('click', '.form-show-more', function () {
    tableReload({ height: pelem.height() }, zTable)
  })
  layForm.render()
  if (!options.notTrigger) {
    setTimeout(() => {
      let elems = selectElem.find('[lay-submit]'), len = elems.length
      if (len > 1) {
        elems.filter('[search]').trigger('click')
      } else if (len) {
        elems.trigger('click')
      }
    }, 0)
  }
  initMxTable(mx, filter, pelem, click, res, mxCallBack, mxclick, selectElem)
  return zTable
}
function tableReloadV(data, count, limit, height, table, page, pelem, options) {
  let val = { data, height: height || pelem.height() }
  if (options.page) {
    val.count = count
    val.page = { count, curr: page._pageNumber + '', limit: (limit || page._pageSize || 20) }
  }
  tableReload(val, table)
}
function setMxTable(judge, res, callBack, pElem) {
  if (judge) {
    let height = pElem.height()
    res.tr.hasClass('jt-selected') || callBack(res.data)
    $('.jt-mx').show()
    setTimeout(() => {
      let h = pElem.height()
      if (height !== h) {
        let tbody = getTmain(pElem)
        tbody.height(tbody.height() + h - height)
      }
    }, 0);
  }
}
function initMxTable(mx, filter, pElem, clickEvent, result, callBack, mxClickEvent, selectElem) {
  let layTable = layui.table
  if (mx) {
    let elem = $(mx.elem), mPElem = elem.parent(), mTable, page = {
      size: (mx.page ? mx.page.limit ? mx.page.limit : 20 : 20) + '',
      page: '1'
    }
    mx.height = mPElem.height()
    result.mxPage = page
    mTable = initTable(mx, result.mxPage, callBack, result)
    result.mxtableReload = function (data, count, limit, height) {
      tableReloadV(data, count, limit, height, mTable, page, mPElem, mx)
    }
    result.getMxCheckedData = function () {
      return mTable.checkStatus(false)
    }
    layTable.on('row(mxtable)', function (res) {
      trClickEvent(res, mxClickEvent, mPElem)
      result.mxrow = res
    })
    selectElem.find('[lay-submit]').on('click', function () {
      $('.jt-mx').hide()
      result.mxtableReload && result.mxtableReload([])
    })
  }
  layTable.on('row(' + filter + ')', (res) => {
    let judge = !trClickEvent(res, clickEvent, pElem)
    mx && setMxTable(judge, res, callBack, pElem)
    result.row = res
  })
}
function trClickEvent(res, clickEvent, pElem) {
  res.updated = function (data, judge) {
    res.data = Object.assign({}, res.data, data)
    res.update(res.data)
    judge && clickEvent && clickEvent(res)
  }
  setTimeout(() => {
    pElem.find('.jt-selected').removeClass('jt-selected')
    res.tr.addClass('jt-selected')
  }, 0);
  return clickEvent && clickEvent(res)
}
function tableReload(option, table) {
  table.reload(option)
}
export function initTable(option, obj = {}, callBack, result) {
  let rowClass = option.rowClass, done = option.done, elem = option.elem, param = {
    elem,
    cols: option.cols,
    id: option.name || '',
    height: option.height,
    disabled: option.disabled,
    data: option.data || [],
    done
  }
  // 根据数据对特定行追加行样式
  if (rowClass) {
    let pelem = $(elem).parent()
    param.done = function (res, page, total) {
      let data = res.data, tbody = getTBody(pelem)
      data.forEach((it, i) => {
        let cl = rowClass(it, i)
        cl && getTr(tbody, i).addClass(cl)
      })
      if (option.done) {
        option.done(res, page, total)
      }
    }
  }
  if (option.page) {
    param.page = Object.assign({
      layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'],
      groups: 5,
      count: 0,
      limit: 20,
      limits: [10, 20, 50, 100, 200, 500, 1000, 1500, 3000, 5000],
      curr: 1,
      jump(res, first) {
        obj.size = res.limit + ''
        obj.page = res.curr + ''
        obj.__proto__ = {
          _pageSize: res.limit + '',
          _pageNumber: res.curr + ''
        }
        if (!first) {
          if (callBack && result) {
            callBack(result.row.data, obj)
          } else if (option.select) {
            $(option.select).find('[lay-submit]').trigger('click')
          } else if (option.getData) {
            option.getData(obj)
          }
        }
      }
    }, option.page)
  } else {
    param.page = false
    param.limit = 0
  }
  return layui.table.render(Object.assign(param, option.cover))
}
export function initQueryPage(options, mx) {
  let elem = $(options.elem), pelem = elem.parent(), layForm = layui.form, zTable, page = {
    size: (options.page ? options.page.limit ? options.page.limit : 20 : 20) + '',
    page: '1'
  }, res = {
    tableReload(data, count, limit, height) {
      tableReloadV(data, count, limit, height, zTable, page, pelem, options)
      this.row = null
    },
    setHeight(height) {
      tableReload({ height: height || pelem.height() }, zTable)
    },
    getFormData() {
      return layForm.val('cx')
    },
    getData() { },
    getCheckedData() {
      return zTable.checkStatus(false)
    },
    page
  }
  if (layui.table && layui.form) {
    zTable = tableInit(options, mx, res, pelem, layForm)
  } else {
    layui.use(['table'], function () {
      zTable = tableInit(options, mx, res, pelem, layForm)
    })
  }
  return res
}
export default {
  initTable,
  initQueryPage
}