import {unique} from 'GMAddInput';
import {setIsPop} from '../../../../g-lobal/dom/var';
import {popContentElem, popElem, setTrData, trData, id, contentElem, valArr, valInput, split, setValArr} from '../var';
import {hide} from './hide';
function close(event: JQuery.ClickEvent, judge: boolean = false) {
  setIsPop(false);
  hide(judge);
  event.stopPropagation();
  setTrData(null);
}
export function bindPopEvent(layTable: any, layForm: any) {
  popElem.on('click', close);
  popContentElem.on('click', (event: JQuery.ClickEvent) => {
    event.stopPropagation();
  });
  popContentElem.find('[cancel]').on('click', close);
  popContentElem.find('[submit]').on('click', (event: JQuery.ClickEvent) => {
    close(event, true);
  });
  layForm.on(`submit(${id}-add)`, ({field}: any) => {
    if (trData) {
      trData.update(field);
      setTrData(null);
    } else {
      layTable.reload(id, {data: unique((layTable.cache[id] || []).concat(field), false)});
    }
    Object.keys(field).forEach(key => {
      field[key] = '';
    });
    layForm.val(id, field, true);
  });
  layTable.on(`row(${id})`, (obj: any) => {
    layForm.val(id, obj.data);
    setTrData(obj);
  });
  layTable.on(`tool(${id})`, (obj: any) => {
    obj.del();
  });
  contentElem.on('click', '.multi-item>.layui-layer-ico', (event: JQuery.ClickEvent) => {
    const el = event.target.parentElement,
      str = el.innerText,
      arr = valArr.filter(it => it != str);
    el.remove();
    valInput.val(arr.join(split[1] || '||'));
    setValArr(arr);
    event.stopPropagation();
  });
}
