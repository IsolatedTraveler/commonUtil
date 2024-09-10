import {BLMB_LX} from './var';
function setElem(elem: JQuery, nr: string) {
  elem.val('');
  if (nr) {
    elem.removeAttr('disabled');
    elem.attr('placeholder', nr);
  } else {
    elem.attr('disabled', 'disabled');
    elem.attr('placeholder', '');
  }
}
export const Class: any = function (this: any) {
  window.layui.use(['form'], () => {
    window.layui.form.on('select(lx)', ({elem, value}: any) => {
      const data: any = BLMB_LX.filter(it => it.id == value)[0] || {},
        tr = $(elem).parents('tr');
      setElem(tr.find('[name=bt]'), data.bt);
      setElem(tr.find('[name=nr]'), data.nr);
    });
    $('#content').on('click', '[lay-evnet="del"]', (e: JQuery.ClickEvent) => {
      const tr = $(e.currentTarget).parents('tr'),
        data = window.layui.form.val(tr);
      this.del(data.mbid, {index: tr.index(), id: data.id});
      tr.remove();
    });
  });
};
