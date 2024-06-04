import { alertMsg } from "../../../../g-lobal";
import { MenuItem } from "../../type/menu";
/**
 * 渲染按钮到指定的JQuery元素。
 *
 * @param elem - 要在其上渲染按钮的JQuery元素。
 * @param menus - 包含多个 `MenuItem` 对象的数组，每个对象代表一个按钮及其配置。
 */
export function renderButtons(elem: JQuery, menus: MenuItem[]) {
  try {
    /**
    * 遍历菜单项数组并为每个项渲染一个按钮。
    *
    * @param item - 当前菜单项，包含按钮的配置信息。
    * @param i - 当前菜单项在数组中的索引。
    */
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