export let layerIndex // 弹出层id
  , isInit // 是否初始化完成
  , selected_tr // 选中行
  , eTable // 表格对象
  , zzc_arr = []
  , zb_key // 影响表数据的form表单key
  , zb_filter // 影响表数据的form表单检索信息
  , zb_change_cols // form表单数据变更影响的cols
  , select_key // col是select列
  , select_key_yxj
  , tr_key
  , tr_templet_key
  , col_change_cols
  , zb_data = {} // 影响表数据的from表单数据
  , date_key_obj // col是date列相关规则 
  , combogrid_key // col是combogrid列
  , def_data_tr = {} // 行默认数据
  , select_option = {}
  function cs(a, key) {
    a = a * 5
    let b = [], c = [], d = [], e = [], f = []
    for (let i = 0; i < 5; i++) {
      b[i] = Number(((b[i - 1] || a) / 5).toFixed(2))
      c[i] = Number((b[i] * 5).toFixed(2))
      d[i] = Number((b[i] * 10).toFixed(2))
      e[i] = Number((b[i] * 50).toFixed(2))
      f[i] = Number((b[i] * 100).toFixed(2))
    }
    if (key) {
      console.log(key + 1,{
        1: b[key],
        5: c[key],
        10: d[key],
        50: e[key],
        100: f[key],
      })
    } else {
      console.log('001', b)
      console.log('005', c)
      console.log('010', d)
      console.log('050', e)
      console.log('100', f)
    }
  }