// 首行内容
export var rows = []
  // 首行关键字判断
  , rowKeys = {}
  , layerIndex
  , zbData = []
  , fbData = []
  , dataObj = {}
  // promise 异步处理
  , fileChangeRes
  , tableSelectKey = []
  , tableSelectVal = {}
  , colSelectKey = []
  , colSelectVal = {}
  , qTable
  , primaryKey = []
export var cols = [rows]