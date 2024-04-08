export function identity(value, elem) {
  if (value) {
    if (/(^\d{15}$)|(^\d{17}(x|X|\d)$)/.test(value)) {
      let a = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'], c = 0
      a.forEach((t, i) => {
        c += value[i] * t
      })
      if (value[17] !== b[c % 11]) {
        return '身份证号输入有误'
      }
    } else {
      return '身份证号格式有误'
    }
  }
}
export function required(value, elem) {
  elem = $(elem)
  let name = elem.attr('name'), msg = '必填选项#{name}不能为空'.replace('#{name}', name ? '【' + name + '】' : '')
  if (value) {
    if (elem.attr('type') === 'radio') {
      if (!elem.parents('.layui-form-item').find(`[name=${name}]`).is(':checked')) {
        return msg
      }
    }
  } else {
    return msg
  }
}
export function judgeNumber(v) {
  return v && Number(v) != 0
}