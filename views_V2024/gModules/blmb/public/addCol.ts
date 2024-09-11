import {getLx} from '../fun';

export function addCol(elem: JQuery, lx: boolean) {
  const tr = document.createElement('tr');
  tr.className = 'layui-form';
  tr.innerHTML = `<td><input type="hidden" name="id"><input type="hidden" name="mbid"><select name="lx" lay-filter="lx">${getLx(lx)}</select></td>
  <td><input type="text" class="layui-input" autocomplete="off" name="bt" disabled></td>
  <td><input type="text" class="layui-input" autocomplete="off" name="nr" placeholder="段落内容"></td><td>
    <select name="sffy">
      <option value="0">同一页</option>
      <option value="1">标题和内容不在同一页</option>
      <option value="2">表题不在同一页</option>
      <option value="3">内容不在同一页</option>
    </select>
  </td>
  <td><input type="text" class="layui-input" autocomplete="off" name="ys"></td><td lay-evnet="del">删除</td>`;
  elem.append(tr);
  window.layui.form.render('select', elem);
  return $(tr);
}
