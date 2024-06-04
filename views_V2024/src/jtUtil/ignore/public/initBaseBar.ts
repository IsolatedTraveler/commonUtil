import { alertMsg } from "../../../../g-lobal";
import { MenuItem } from "../../type/menu";
import { renderMenuItems, renderButtons } from "../fun";
/**
 * 初始化基础工具栏，包括顶部菜单和按钮。
 * 
 * @param menus - 一个二维数组，每个子数组包含多个 `MenuItem` 对象，代表一个菜单下的各个条目。
 * @param buttons - 一个包含多个 `MenuItem` 对象的一维数组，代表工具栏上的按钮。
 */
export function initBaseBar(menus: MenuItem[][], buttons: MenuItem[]) {
  try {
    const topMenuElem: any = $('#topmenu'), topbuttonElem = $("#topbutton");
    renderMenuItems(topMenuElem, menus);
    renderButtons(topbuttonElem, buttons);
    setTimeout(function () {
      const topmenu = document.getElementById("topmenu")
        , topBtn = document.getElementById("topbutton")
        , body: any = $('#bodydiv')
        , topMenuParent: any = topMenuElem.parent()
      topMenuElem.parent().attr("style", "overflow: hidden;height: 40px;background-color: white;vertical-align: middle;");
      if (topmenu) {
        topbuttonElem.css("width", document.body.clientWidth - topmenu.offsetWidth - 35);
      }
      if (body) {
        if (topBtn) {
          body.layout('panel', 'north').panel('resize', { height: topBtn.offsetHeight });
        }
        body.layout('panel', 'north').panel('options').maxHeight = 80;
        body.layout();
      }
      topMenuElem.css("margin-top", (topMenuParent.height() - topMenuElem.height()) / 2);
      var height = topMenuElem.parent().height() - 20;
      topMenuElem.after("<div class=\"menuclass\" style=\"margin-top: 10px;color: white;float:left;height: " + height + "px;vertical-align: middle;\"></div>");
    }, 10);
  }
  catch (e) {
    alertMsg(e);
  }
}