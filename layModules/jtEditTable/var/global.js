export let layerIndex // 弹出层id
  , isInit // 是否初始化完成
  , isInit_arr = []
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
  , date_key_obj = {} // col是date列相关规则 
  , combogrid_key // col是combogrid列
  , def_data_tr = {} // 行默认数据
  , select_option = {}
  , table_resolve