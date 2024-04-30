interface InitBaseBarMenu {
  name: string
  method: (_v?: any) => void
  icon: string
  id?: string
  width?: string | number
  menuid?: string
}
function renderMenuItems(elem: HTMLElement, menus: InitBaseBarMenu[][]) {
  const menutitles = ["文件", "编辑", "查看", "报表", "帮助"]
    , menuIcons = ["icon-extend-file", "icon-extend-edit", "icon-extend-view", "icon-extend-view", "icon-extend-view"];
  menus.forEach((items, i) => {
    if (!items || !items.length) return
    const menuId = 'menu' + i, menuDivId = 'menudiv' + i, menuDivId$ = '#' + menuDivId
    elem.append(`<a id="${menuId}" href="#" style="margin-left:1px;">${menutitles[i]}</a><div id="${menuDivId}</div>`)
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
          GLOBAL$COMMON$V2024$.alertMsg(e.message || e);
        }
      })
    })
  })
}
function renderButtons(elem: HTMLElement, menus: InitBaseBarMenu[]) {
  menus.forEach((item, i) => {
    const btnId = 'button' + i, btnId$ = '#' + btnId
    elem.append(`<a id="${btnId}" href="#"  style="margin-left:5px;">${item.name}</a>`);
    const width = item.width || 80, obj: any = {
      plain: true,
      height: 40,
      width,
      iconCls: item.icon,
      onClick: item.method,
      id: item.id
    }
    if (item.menuid) {
      obj.menu = '#' + item.menuid
      $(btnId$).splitbutton(obj)
    } else {
      $(btnId$).linkbutton(obj)
    }
  })
}
export function initBaseBar(menus: InitBaseBarMenu[][], buttons: InitBaseBarMenu[]) {
  try {
    const topMenuElem = $('#topmenu'), topbuttonElem = $("#topbutton")
    renderMenuItems(topMenuElem, menus)
    renderButtons(topbuttonElem, buttons)
    setTimeout(function () {
      topMenuElem.parent().attr("style", "overflow: hidden;height: 40px;background-color: white;vertical-align: middle;");
      topbuttonElem.css("width", document.body.clientWidth - (document.getElementById("topmenu") as HTMLElement).offsetWidth - 35);
      $('#bodydiv').layout('panel', 'north').panel('resize', { height: (document.getElementById("topbutton") as HTMLElement).offsetHeight });
      $('#bodydiv').layout('panel', 'north').panel('options').maxHeight = 80;
      $('#bodydiv').layout();
      topMenuElem.css("margin-top", (topMenuElem.parent().height() - topMenuElem.height()) / 2);
      var height = topMenuElem.parent().height() - 20;
      topMenuElem.after("<div class=\"menuclass\" style=\"margin-top: 10px;color: white;float:left;height: " + height + "px;vertical-align: middle;\"></div>");
    }, 10)
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e.message || e)
  }
}