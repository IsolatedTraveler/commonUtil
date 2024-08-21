import {cols, contentElem, currentTable, setValArr, split, valInput} from '../var';
function getSpan(it: string) {
  return `<li class="multi-item">${it}<a class="layui-layer-ico" href="javascript:;"></a></li>`;
}
export function val(v?: string | any[]) {
  if (v === undefined) {
    return valInput.val();
  } else {
    let arr: string[][],
      strArr: string[],
      str: string,
      html = '';
    if (typeof v === 'string') {
      strArr = v.split(split[1] || '||').filter(it => it);
      arr = strArr.map(it => {
        html += getSpan(it);
        return it.split(split[0] || '|');
      });
      str = v;
    } else {
      strArr = v
        .map((it: any) => {
          const v = cols.map(({field = ''}) => {
              return it[field] || '';
            }),
            s = v.join(split[0] || '|');
          html += getSpan(s);
          return s;
        })
        .filter(it => it);
      arr = v;
      str = strArr.join(split[1] || '||');
    }
    valInput.val(str);
    contentElem.html(html);
    currentTable.reload({data: arr});
    setValArr(strArr);
  }
}
