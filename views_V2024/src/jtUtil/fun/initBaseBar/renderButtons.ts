export interface InitBaseBarMenu {
  name: string
  method: (_v?: any) => void
  icon: string
  id?: string
  width?: string | number
  menuid?: string
}
export function renderButtons(elem: HTMLElement, menus: InitBaseBarMenu[]) {
  try {
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
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}