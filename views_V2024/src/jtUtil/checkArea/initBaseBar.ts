import { InitBaseBarMenu, renderButtons, renderMenuItems } from "../fun/initBaseBar";

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
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}