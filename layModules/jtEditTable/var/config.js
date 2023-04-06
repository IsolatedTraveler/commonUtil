export let elem // table元素
  , name// table元素lay-filter值
  , glzb// 可以改变table数据相关的form表单
  , limit// table最多可以编辑数据量
  , data// 默认数据
  , enterAdd // 是否支持回车新增行（该功能需要watch不为空）
  , forbidAdd // 是否默认添加空行
  , addField // 监听table不显示的col列数据
  , cols // table列数据信息
  , watch  // 行是否具有唯一性，具有唯一性参考列 相当于数据库的唯一主键设置
  , rowClick // 行点击事件
  , rowCheck // 变更选中行后触发事件
  , combogrid // combogrid列
  , dataChange // 列数据更改触发的事件
  , done // table加载完执行的功能
  , editCheckData // 校验table数据是否合法
  , selectData // table表单中select列相关规则
  , isEdit // 是否开启编辑功能  默认开启   false 不开启
  , skin // 自定义表格样式
  , autoHeight // 是否自动设置高度
  , primaryCol // 判断是否空行列名
  , errorTimeOut = 300000 // 错误提示行标识多久