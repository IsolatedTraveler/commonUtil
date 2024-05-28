import { alertMsg } from "../../../g-lobal";
import { MenuItem } from "../type/menu";

export function renderButtons(elem: JQuery, menus: MenuItem[]) {
  try {
    menus.forEach((item, i) => {
      const btnId = 'button' + i, btnId$ = '#' + btnId;
      elem.append(`<a id="${btnId}" href="#"  style="margin-left:5px;">${item.name}</a>`);
      const width = item.width || 80, obj: any = {
        plain: true,
        height: 40,
        width,
        iconCls: item.icon,
        onClick: item.method,
        id: item.id
      },
        btn: any = $(btnId$)
      if (item.menuid) {
        obj.menu = '#' + item.menuid;
        btn.splitbutton(obj);
      }
      else {
        btn.linkbutton(obj);
      }
    });
  }
  catch (e) {
    alertMsg(e);
  }
}