import Class from "../core.js"
import { debounce1 } from "../public/fun/base.js";
import { srcWEventKbjbg } from "../var/init.js";
// 全键盘操作
(function() {
  let prevE
  $(d).on('click', srcWEventKbjbg, function(e) {
    prevE = e.currentTarget
  })
  $(d).on('focus', srcWEventKbjbg, function(e) {
    prevE = e.currentTarget
    if (!prevE.select) {
      prevE = e.target
    }
    prevE.select()
    prevE.selectionStart = 0
    prevE.selectionEnd = prevE.value.length
    prevE = e.currentTarget
  })
  function keyup(e) {
    if (e.keyCode === 13) {
      if (!layui.layer || !layui.layer.submit()) {
        let tag = e.target.tagName
        if (tag !== 'BODY' && !prevE) {
          prevE = e.target
        }
        if (prevE) {
          let fElem = $(prevE).parents('.layui-form')
          if (prevE.getAttribute('jt-submit') !== null) {
            fElem.find('[lay-submit]').trigger('click')
          } else {
            let elems = fElem.find(srcWEventKbjbg)
            ,i = elems.index(prevE)
            ,elem = elems[i + 1] || elems[0]
            if (elem) {
              tag = elem.tagName
              if (tag === 'TD') {
                let el = $(elem)
                setTimeout(() => {
                  el.trigger('click')
                }, 0)
              } else {
                elem.focus()
                let el = $(elem)
                if (elem.getAttribute('laydate') !== null) {
                  el.trigger('click')
                } else if (el.hasClass('jt-select')) {
                  setTimeout(() => {
                    el.parent().trigger('click')
                  }, 0);
                }
              }
              prevE = elem
            }
          }
        }
      }
    }
  }
  let setHeight = function () {
    return debounce1((elem) => {
      elem.style.height = ''
      setTimeout(() => {
        elem.style.height = elem.scrollHeight + 'px'
      }, 0);
    }, 10)
  }()
  d.addEventListener('keyup', keyup)
  w.addEventListener('jt-keyup', function(e) {
    keyup(e.detail)
  })
  $(d).on('DOMNodeInserted', '[autoHeight="true"]', function(e) {
    setHeight(e.currentTarget)
  })
  $(d).on('DOMNodeRemoved', '[autoHeight="true"]', function(e) {
    setHeight(e.currentTarget)
  })
  $('[autoHeight="true"]').each((i, el) => {
    setHeight(el)
  })
  Class.prototype.keyupEvent = new CustomEvent('jt-keyup', {detail: {keyCode: 13, target: {tagName: 'BODY'}}}) 
})();