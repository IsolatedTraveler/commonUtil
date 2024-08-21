import {ADD_INPUT_IDS, AddInputConfig, FIXED, STYLE, TABLE_EVENT_ID, TableColSet, uuid} from 'GMAddInput';
import {setPopSelectElem} from '../../../../g-lobal/dom/var';

export let valInput: JQuery<HTMLInputElement>,
  boxInput: JQuery<HTMLDivElement>,
  selectPopElem: JQuery<HTMLDivElement>,
  popElem: JQuery<HTMLDivElement>,
  popContentElem: JQuery<HTMLDivElement>,
  contentElem: JQuery<HTMLDivElement>,
  selectElemConfig: TableColSet,
  valArr: string[] = [],
  cols: TableColSet[],
  trData: any,
  split: string[] = ['|', '||'],
  index: number = 0,
  currentTable: any,
  id: string;
export function initAdInput(config: AddInputConfig) {
  valInput = $(config.elem);
  boxInput = valInput.parent();
  cols = config.cols;
  index = config.index || 0;
  selectElemConfig = config.cols[index];
  split[0] = (config.split || [])[0] || split[0];
  split[1] = (config.split || [])[1] || split[1];
  if (selectElemConfig.type === 'select') {
    setPopSelectElem(selectElemConfig.data, selectElemConfig.id || 'id', selectElemConfig.mc || 'mc', true);
  }
  const fixedStyle = $('style[name="fixed"]');
  if (!fixedStyle[0]) {
    $('head').append($('<style name="fixed">' + STYLE + '</style>'));
  }
  popElem = $(`<div class="${FIXED}">`);
  popContentElem = $('<div style="width:75%;">');
  contentElem = $('<ul>');
  popElem.hide();
  popElem.append(popContentElem);
  boxInput.append(contentElem);
  boxInput.append(popElem);
  id = uuid();
  while (ADD_INPUT_IDS[id]) {
    id = uuid();
  }
  valInput[0].dataset.id = id;
}
export function setTrData(v: any) {
  trData = v;
}
export function setCurrentTable(layTable: any) {
  currentTable = layTable.render({
    elem: '#' + id,
    data: [[]],
    cols: [[].concat(cols as any, [{title: '操作', templet: `#${TABLE_EVENT_ID}`, align: 'center', width: '100'}] as any)]
  });
}
export function setValArr(v: string[]) {
  valArr = v;
}
