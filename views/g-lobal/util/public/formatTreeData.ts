export function formatTreeData(data: Array<any>, id = 'id', pid = 'sjid', key = '') {
  var result: any = [], map: any = { '_formatTreeData': data };
  [].forEach.call(data, function (it) {
    map[key + it[id]] = it
  });
  [].forEach.call(data, function (it) {
    var p = map[key + it[pid]]
    if (p) {
      p.children ? p.children.push(it) : p.children = [it]
      p.jtchild ? p.jtchild.push(it) : p.jtchild = [it]
    } else {
      result.push(it)
    }
  })
  result.__proto__ = map
  return result
}