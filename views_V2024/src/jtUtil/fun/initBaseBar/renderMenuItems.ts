import { InitBaseBarMenu } from "./renderButtons";

export function renderMenuItems(elem: HTMLElement, menus: InitBaseBarMenu[][]) {
  try {
    const menutitles = ["文件", "编辑", "查看", "报表", "帮助"]
      , menuIcons = ["icon-extend-file", "icon-extend-edit", "icon-extend-view", "icon-extend-view", "icon-extend-view"];
    menus.forEach((items, i) => {
      if (!items || !items.length) return
      const menuId = 'menu' + i, menuDivId = 'menudiv' + i, menuDivId$ = '#' + menuDivId
      elem.append(`<a id="${menuId}" href="#" style="margin-left:1px;">${menutitles[i]}</a><div id="${menuDivId}"></div>`);
      $('#' + menuId).menubutton({
        plain: false,
        width: 80,
        height: 40,
        iconCls: menuIcons[i],
        menu: menuDivId$
      })
      const itemElem = $(menuDivId$)
      items.forEach((item, j) => {
        itemElem.menu('appendItem', {
          text: item.name,
          iconCls: item.icon,
          id: item.id
        })
        itemElem.children("div").eq(j + 1).click(function () {
          try {
            if (item.id) {
              item.method(item.id);
            } else {
              item.method();
            }
          } catch (e: any) {
            GLOBAL$COMMON$V2024$.alertMsg(e);
          }
        })
      })
    })
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}