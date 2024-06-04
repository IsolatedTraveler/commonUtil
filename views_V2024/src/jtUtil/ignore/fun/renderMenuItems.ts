import { alertMsg } from "../../../../g-lobal";
import { MenuItem } from "../../type/menu";
/**
 * 渲染菜单项到指定的JQuery元素。
 *
 * @param elem - 菜单将被渲染到的JQuery元素。
 * @param menus - 一个二维数组，每个子数组包含多个 `MenuItem` 对象，代表一个菜单下的各个条目。
 */
export function renderMenuItems(elem: JQuery, menus: MenuItem[][]) {
  try {
    const menutitles = ["文件", "编辑", "查看", "报表", "帮助"], menuIcons = ["icon-extend-file", "icon-extend-edit", "icon-extend-view", "icon-extend-view", "icon-extend-view"];
    /**
     * 遍历并处理每一个菜单组。
     *
     * @param items - 当前菜单组的菜单项集合。
     * @param i - 当前菜单组的索引。
     */
    menus.forEach((items, i: number) => {
      if (!items || !items.length)
        return;
      const menuId = 'menu' + i, menuDivId = 'menudiv' + i, menuDivId$ = '#' + menuDivId;
      elem.append(`<a id="${menuId}" href="#" style="margin-left:1px;">${menutitles[i]}</a><div id="${menuDivId}"></div>`);
      ($('#' + menuId) as any).menubutton({
        plain: false,
        width: 80,
        height: 40,
        iconCls: menuIcons[i],
        menu: menuDivId$
      });
      const itemElem: any = $(menuDivId$);
      /**
      * 遍历并处理当前菜单组下的每一项。
      *
      * @param item - 当前菜单项。
      * @param j - 当前菜单项在菜单组中的索引。
      */
      items.forEach((item, j) => {
        itemElem.menu('appendItem', {
          text: item.name,
          iconCls: item.icon,
          id: item.id
        });
        itemElem.children("div").eq(j + 1).click(function () {
          try {
            if (item.id) {
              item.method(item.id);
            }
            else {
              item.method();
            }
          }
          catch (e) {
            alertMsg(e);
          }
        });
      });
    });
  }
  catch (e) {
    alertMsg(e);
  }
}