function setSelectV(el, v, id, mc, data, judge) {
  let h = ''
  if (el[0] && el[0].jt) {
    el[0].jt.reload(id, mc, data)
    el[0].jt.val(v || '')
  } else {
    el.html(h + [].map.call(data, it => {
      return `<option value="${it[id]}" ${it.only ? 'only' : ''} ${v === it[id] ? 'selected="true"' : ''} jt-data='${JSON.stringify(it)}'>${it[mc]}</option>`
    }).join(''))
    layui.form.render('select', el.parent())
  }
  if (v && !judge) {
    el.trigger('change')
  }
}
function setSelect(option, judge) {
  const id = option.valId || 'id', mc = option.showId || 'mc', el = $(option.elem)
  var v, data = option.data || []
  if (option.value !== undefined) {
    v = option.value
  } else if (option.first && data.length) {
    v = data[0][id]
  }
  if (option.isNotNull) {
    if (v === undefined && data.length) {
      v = data[0][id]
    }
  } else {
    let it = {}
    it[id] = undefined
    it[mc] = option.tip || '请选择'
    data = [it].concat(data)
  }
  if (v !== undefined) {
    setSelectV(el, v, id, mc, data, judge)
  } else {
    el.each((i,e) => {
      e = $(e)
      v = e.attr('value')
      setSelectV(e, v, id, mc, data, judge)
    })
  }
  return Promise.resolve()
}
export function setSelectOption(options, judge = true) {
  if (Array.isArray(options)) {
    return Promise.all(options.map(it => {
      return setSelect(it, judge)
    }))
  } else {
    return setSelect(options, judge)
  }
}
export function setRadioValue(name, value) {
  $("input[type=radio][name='"+ name +"'][value='" + value + "']").prop("checked", true);
}
export function setFormData(data, layForm) {
  for(var keyword in data){
    if($("[name='"+keyword+"']").length > 0){
      var tagName = $("[name='"+keyword+"']")[0].tagName.toLowerCase();
      if(tagName == "input"){
        var type = $("[name='"+keyword+"']").attr("type");
        if(type == "checkbox"){
          if(data[keyword]){
            var arrValue = data[keyword].split(",");
            if(arrValue && arrValue.length>0){
              for(var i = 0; i < arrValue.length;i++){
                $("[name='"+keyword+"'][value='"+arrValue[i]+"']").prop("checked",true);
              }
            }
          }
        }else if(type == "radio"){
          $("[name='"+keyword+"'][value='"+data[keyword]+"']").prop("checked",true);
        }else{
          $("[name='"+keyword+"']").val(data[keyword]);
        }
      }else if(tagName == "select"){
        //特殊处理  联动选择框 问题是一定要先加载后渲染，现在存在
        //渲染下级机构，但是没有处理是否赋值过了
        $("[name='"+keyword+"']").val(data[keyword]);
      }else if(tagName == "textarea"){
        var value = data[keyword] ? data[keyword] :"";
        $("[name='"+keyword+"']").text(value);
      }
      else{
        continue;
      }
    }
  }
  layForm.render();
}
export function setFormVal(name, data) {
  if (data) {
    var v = layui.form.val(name), keys = Object.keys(v)
    keys.forEach(it => {
      v[it] = ''
    })
    data = Object.assign(v, data)
    layui.form.val(name, data)
    layui.form.render()
  } else {
    return layui.form.val(name)
  }
}
export function dateRender(obj = {}) {
  var elem = obj.elem, done = obj.done, format = obj.format, type = obj.type, val = []
  $(elem || '[laydate]').each((i, elem) => {
    const el = $(elem)
    val.push(layui.laydate.render(Object.assign({
      elem,
      type: type || el.attr('laytype') || 'date',
      format: format || el.attr('format') || 'yyyy/MM/dd',
      value: obj.value || '',
      done(res, a, b) {
        if (done) {
          done(res, elem, a, b)
        }
      }
    }, obj.cover)))
  })
  return val.length > 1 ? val : val[0]
}
export function dateRangeRender(obj) {
  let ks = obj.name[0], js = obj.name[1], filter = obj.filter, ksVal, jsVal, value = {}, format = obj.format || 'yyyy/MM/dd', form = obj.form, ksObj, jsObj, max = obj.max
  const done = function(o) {
    if (ksVal && !/[_]/.test(ksVal) && jsVal && !/[_]/.test(jsVal)) {
      if (jsVal < ksVal) {
        layui.layer.msg('结束日期不能小于开始日期')
        o.val('')
        return
      } else {
        if (max) {
          let temp = new Date(jsVal)
          if (max.y) {
            temp = temp.addYear(-max.y)
          }
          if (max.M) {
            temp = temp.addMonth(-max.M)
          }
          if (max.d) {
            temp = temp.addDay(-max.d)
          }
          if (temp > new Date(ksVal)) {
            layui.layer.msg(max.msg)
            o.val('')
          }
        }
      }
    }
    obj.done && obj.done()
    if (filter) {
      $('[lay-filter=' + filter + ']').val('')
      layui.form.render('select')
    }
  }, selectFilter = function(obj) {
    let date = new Date(), val = obj.value
    jsVal = date.format(format)
    if (val === '1') {
      ksVal = jsVal
    } else if (val === '2') {
      jsVal = ksVal = date.addDay(-1).format(format)
    } else if (val === '3') {
      jsVal = ksVal = date.addDay(-2).format(format)
    } else if (val === '4') {
      ksVal = date.addDay(-3).format(format)
    } else if (val === '5') {
      ksVal = date.addDay(-6).format(format)
    } else if (val === '6') {
      ksVal = date.addMonth(-1).format(format)
    } else if (val === '7') {
      ksVal = date.addMonth(-3).format(format)
    } else if (val === '8') {
      ksVal = date.addMonth(-12).format(format)
    } else if (val === '9') {
      ksVal = date.getWeek().format(format)
    } else if (val === '10') {
      ksVal = date.getMonthDay().format(format)
    } else if (val === '11') {
      ksVal = date.getSeason().format(format)
    } else if (val === '12') {
      date.setMonth(0)
      date.setDate(1)
      ksVal = date.format(format)
    } else if (val === '13') {
      date.setMonth(0)
      date.setDate(1)
      jsVal = date.format(format)
      ksVal = date.addMonth(-12).format(format)
    } else if (val === '99') {
      ksVal = ''
      jsVal = ''
    }
    value[ks] = ksVal
    value[js] = jsVal
    layui.form.val(form, value)
  }
  ksObj = dateRender({
    elem: '[name=' + ks + ']',
    format,
    cover: obj.cover,
    type: obj.type,
    done(val, elem, value, old) {
      ksVal = val
      done(jsObj)
    }
  })
  jsObj = dateRender({
    elem: '[name=' + js + ']',
    format,
    type: obj.type,
    cover: obj.cover,
    done(val, elem, value, old) {
      jsVal = val
      done(ksObj)
    }
  })
  filter && setSelectOption({
    elem: '[lay-filter=' + filter + ']',
    data: [
      {id: '99', mc: '清空'},
      {id: '1', mc: '今天'},
      {id: '2', mc: '昨天'},
      {id: '3', mc: '前天'},
      {id: '4', mc: '近三天'},
      {id: '5', mc: '近一周'},
      {id: '6', mc: '近一月'},
      {id: '7', mc: '近三月'},
      {id: '8', mc: '近一年'},
      {id: '9', mc: '本周'},
      {id: '10', mc: '本月'},
      {id: '11', mc: '本季'},
      {id: '12', mc: '本年'},
      {id: '13', mc: '上一年'}
    ],
    isNotNull: true,
    value: obj.value || '6'
  })
  filter && selectFilter({value: obj.value || '6'})
  filter && layui.form.on('select(' + filter + ')', selectFilter)
}
export default {
  setSelectOption,
  setRadioValue,
  setFormData,
  setFormVal,
  dateRender,
  dateRangeRender
}