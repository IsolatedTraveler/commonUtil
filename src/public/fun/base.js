import { that } from "../../var/init"

function srcBaseBaseFunUnique(it, keys) {
  if (keys) {
    return keys.map(key => it[key]).join('-')
  }
  return JSON.stringify(it)
}
function srcBaseBaseFunDealNumber(v) {
  if (!v) {
    return ['0', '']
  } else {
    v = v.toString().trim()
    if (/^[-0-9]*(\.[0-9]+)*$/.test(v)) {
      v = v.split('.')
      v[1] = v[1] ? v[1].slice(0, 15) : ''
      return v
    } else {
      return false
    }
  }
}
export function unique(arr, keys) {
  let obj = {}
  arr.forEach(it => {
    obj[srcBaseBaseFunUnique(it, keys)] = it
  })
  return Object.keys(obj).map(key => obj[key])
}
export function calc(a, b, c, isNumber) {
  let result, aArr, bArr, aLen, bLen, len
  // 处理传入数据，使传入数据合法
  aArr = srcBaseBaseFunDealNumber(a)
  if (aArr === false) {
    console.error('参数1不合法')
    return false
  }
  bArr = srcBaseBaseFunDealNumber(b)
  if (bArr === false) {
    console.error('参数2不合法')
    return false
  } // 处理数据，将数据同时放大一定倍数，是所有数据都为正整数
  aLen = aArr[1].length
  bLen = bArr[1].length
  len = Math.max(aLen, bLen)
  a = BigInt(aArr[0] + aArr[1]) * BigInt(Math.pow(10, len - aLen))
  b = BigInt(bArr[0] + bArr[1]) * BigInt(Math.pow(10, len - bLen))
  // 计算放大一定倍数后的数据，并获取放大一定倍数后的数据要缩小的倍数
  if (c === '+') {
    result = (a + b).toString()
  } else if (c === '-') {
    result = (a - b).toString()
  } else if (c === '*') {
    result = (a * b).toString()
    len = len * 2
  } else if (c === '/') {
    let mod = a % b
    result = ((a - mod) / b).toString()
    if (mod !== 0) {
      if (result === '0') {
        result = mod > 0 ? result : '-0'
      }
      result += '.' + (Number(mod) / Number(b)).toFixed(15).toString().split('.')[1];
    }
    len = 0
  }
  // 放大倍数后且结果不为0，对结果缩小倍数处理
  if (len != 0 && result != 0) {
    if (result.length > len) {
      result = result.slice(0, -len) + '.' + result.slice(-len)
    } else {
      let arr = result.split('-'), judge = ''
      if (arr[1]) {
        judge = '-'
        result = arr[1]
      }
      len -= result.length
      for (let i = 0; i< len; i++) {
        result = '0' + result
      }
      result = judge + '0.' + result
    }
  }
  if (isNumber) {
    return Number(result)
  } else{
    return result
  }
}
// 精确小数位  {num : '带精确的数据', precision: '精确位数', type: {desc: '精确类型', 1: '默认值，四舍五入', 2: '向下取整', 3: '向上取整'}}
export function toDecimalNumber(num, precision = 0, type = 1) {
  let f = parseFloat(num)
  if (isNaN(f)) {
    return num
  } else {
    if (type === 1) {
      return f.toFixed(precision)
    } else {
      let bs = Math.pow(10, precision), sl
      if (type === 2) {
        sl = Math.floor(this.calc(f, bs, '*')).toString()
      } else {
        sl = Math.ceil(this.calc(f, bs, '*')).toString()
      }
      return sl.slice(0, -precision) + '.' + sl.slice(-precision)
    }
  }
}
export function throttle(fun, delay) {
  let time = null
  return function() {
    if (!time) {
      let args = arguments
      time = setTimeout(() => {
        fun.apply(that, args)
        time = null
      }, delay)
    }
  }
}
export function debounce1(fun, delay) {
  let time = null
  return function() {
    let args = arguments
    clearTimeout(time)
    time = setTimeout(() => {
      fun.apply(that, args)
    }, delay)
  }
}
export function debounce(fun, delay) {
  let time = null, resReject = null
  return function() {
    let args = arguments
    return new Promise((resolve, reject) => {
      if (resReject) {
        resReject()
      }
      clearTimeout(time)
      resReject = reject
      time = setTimeout(() => {
        resReject = null
        let a = fun.apply(that, args)
        if (a && a.__proto__ === Promise.prototype) {
          a.then(e => {
            resolve(e)
          }).catch(e => {
            reject()
          })
        } else {
          resolve()
        }
      }, delay)
    })
  }
}
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
export default {
  unique,
  calc,
  toDecimalNumber,
  throttle,
  debounce,
  debounce1,
  uuid
}