
function getNode(id, idKey, v) {
  if (id !== undefined && id !== null) {
    id = typeof id === 'string' ? id : id[idKey]
    return v.getNodesByParam(idKey, id)[0]
  } else {
    return id
  }
}
function refresh(node, v) {
  if (node) {
    let parentNode = node.getParentNode()
    if (parentNode) {
      let state = parentNode.check_Child_State
      if (state === 0 && parentNode.checked) {
        parentNode.checked = false
        v.updateNode(parentNode)
      }
    }
  }
}
export function initTree(options) {
  let id, idKey = options.valId || 'id', data = (options.data || []).map(it => {
    it.isParent = it.isparent
    return it
  }), set = Object.assign({
    data: {
      key: {
        name: options.showId || 'mc',
        ...(options.dataKey || {})
      },
      simpleData: {
        enable: true,
        idKey,
        pIdKey: options.pid || 'pid'
      }
    },
    callback: {
      onClick: (options.click || options.checked) ? function(a, b, c) {
        options.click && options.click(a, b, c)
        if (options.checked && id !== c[idKey]) {
          id = c[idKey]
          options.checked(a, b, c)
        }
      } : undefined, 
      onExpand: options.expand,
      onChecked: options.onChecked
    }
  }, options.cover), open = []
  data.forEach(it => {
    if (it.open) {
      open.push(it[idKey])
    }
  })
  let v = $.fn.zTree.init($(options.elem), set, data)
  v.checked = function(ids, checked, judge) {
    if(typeof ids === 'string') {
      ids = ids.split(',')
    }
    ids.forEach(it => {
      v.checkNode(v.getNodeByParam(idKey, it), checked, judge)
    })
  }
  v.jtUpdateNode = function(id, data = {}, sjid) {
    let node = getNode(sjid !== undefined ? sjid : id, idKey, v)
    if (sjid === undefined) {
      v.updateNode(Object.assign(node, data))
    } else if (node) {
      v.addNodes(node, -1, data, true)
    } else {
      node = getNode(id, idKey, v)
      if (node) {
        v.updateNode(Object.assign(node, data))
      } else {
        v.addNodes(null, -1, data, true)
      }
    }
    v.refresh()
  }
  v.del = function(id, judge) {
    let node = getNode(id, idKey, v)
    if (node) {
      v.removeNode(node, judge)
      refresh(node, v)
      v.refresh()
    }
  }
  setTimeout(() => {
    open.forEach(it => {
      let node = v.getNodeByParam(idKey, it)
      options.expand && options.expand('', '', node, 'default')
      options.notTriggerChecked || options.checked && options.checked('', '', node, 'default')
    })
  }, 0);
  if (options.showLevel) {
    let nodes = v.getNodes()
    nodes.forEach(node => {
      v.expandNode(node, true, false, false)
    })
  }
  return v
}
export default {
  initTree
}