interface InitBaseBarMenu {
  name: string
  method: (_v?: any) => void
  icon: string
  id?: string
  width?: string | number
  menuid?: string
}
export function initBaseBar(menus: InitBaseBarMenu[][], buttons: InitBaseBarMenu[]) {
  try {
    //渲染基础顶部菜单栏
    var menutitles = ["文件", "编辑", "查看", "报表", "帮助"];
    var menuIcons = ["icon-extend-file", "icon-extend-edit", "icon-extend-view", "icon-extend-view", "icon-extend-view"];
    menus.forEach((n, i) => {
      if (n.length > 0) {
        $("#topmenu").append('<a id="menu' + i + '" href="#" style="margin-left:1px;" >' + menutitles[i] + '</a>');
        //生成menu下拉项
        var html = "<div id='menudiv" + i + "'></div>";
        $("#topmenu").append(html);
        $("#menu" + i).menubutton({
          plain: false,
          width: 80,
          height: 40,
          iconCls: menuIcons[i],
          menu: "#menudiv" + i
        });

        n.forEach((k, j) => {
          $("#menudiv" + i).menu('appendItem', {
            text: k.name,
            iconCls: k.icon,
            id: k.id
          })
          $("#menudiv" + i).children("div").eq(j + 1).click(function () {
            try {
              if (k.id) {
                k["method"](k.id);
              } else {
                k["method"]();
              }
            } catch (e) {
              GLOBAL$BROWSER$.errorTrace(e);
            }
          })
        });
      }
    })

    //渲染基础顶部按钮
    buttons.forEach((n, i) => {
      $("#topbutton").append('<a id="button' + i + '" href="#"  style="margin-left:5px;">' + n.name + '</a>');
      var width = n.width;
      if (!width) {
        width = 80;
      }
      if (n.menuid) {
        $("#button" + i).splitbutton({
          plain: true,
          //selected:true,height:40,
          height: 40,
          width: width,
          iconCls: n["icon"],
          onClick: n["method"],
          id: n.id,
          menu: "#" + n.menuid
        });
      } else {
        $("#button" + i).linkbutton({
          plain: true,
          //selected:true,
          width: width,
          height: 40,
          iconCls: n["icon"],
          onClick: n["method"],
          id: n.id
        });
      }
    })

    setTimeout(function () {
      $("#topmenu").parent().attr("style", "overflow: hidden;height: 40px;background-color: white;vertical-align: middle;");
      $("#topbutton").css("width", document.body.clientWidth - (document.getElementById("topmenu") as HTMLElement).offsetWidth - 35);
      $('#bodydiv').layout('panel', 'north').panel('resize', { height: (document.getElementById("topbutton") as HTMLElement).offsetHeight });
      $('#bodydiv').layout('panel', 'north').panel('options').maxHeight = 80;
      $('#bodydiv').layout();
      $("#topmenu").css("margin-top", ($("#topmenu").parent().height() - $("#topmenu").height()) / 2);
      var height = $("#topmenu").parent().height() - 20;
      $("#topmenu").after("<div class=\"menuclass\" style=\"margin-top: 10px;color: white;float:left;height: " + height + "px;vertical-align: middle;\"></div>");
    }, 10)
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}