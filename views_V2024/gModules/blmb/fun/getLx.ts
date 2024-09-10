import {BLMB_LX} from '../var';

export function getLx(lx: boolean) {
  const data = lx ? [{id: '3', mc: '尾部数据', nr: '标题内容', bt: '数据类型，参考主页内容选项'}] : BLMB_LX;
  return data.map(it => `<option value="${it.id}">${it.mc}</option>`).join('');
}
