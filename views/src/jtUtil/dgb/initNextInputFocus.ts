export function initNextInputFocus(formID: string, domID: string) {
  $(document).on('keyup', '#' + formID + ' input, a.easyui-linkbutton', function (e: any) {
    try {
      if (e.keyCode == 13 && e.target.type != 'submit') {
        if (domID && e.target.id == domID) {
          return;
        }
        var inputs = $(e.target).parents("form").eq(0).find(":input:visible:not(:disabled):not([readonly]), a.easyui-linkbutton");
        var idx = inputs.index(e.target);
        var input_ = $(e.target).parent().prev();
        //如果是searchbox，回车光标不下移
        if (!input_.is('.easyui-searchbox') && !input_.is('.easyui-combogrid')) {
          if (idx == inputs.length - 1) {
            if (inputs[0]) {
              inputs[0].select();
            }
            //inputs[0].trigger('click');
          } else {
            inputs[idx + 1].focus();
            if (inputs[idx + 1].tagName == "INPUT") {
              if (inputs[idx + 1]) {
                inputs[idx + 1].select();
              }
              //inputs[idx + 1].trigger('click');
            }
          }
        }
      }
      //光标上下键则展开combobox
      //				if(e.keyCode == 38 || e.keyCode == 40 && e.target.type != 'submit') {
      //					if(e.target.tagName == "INPUT"){
      //						var combobox_ = $(e.target).parent().prev();
      //						if(combobox_.is('.easyui-combobox')){
      //							if(combobox_.combobox('panel').panel("options").closed){
      //								combobox_.combobox('showPanel');
      //							}
      //						}
      //					}
      //				}
      //alt组合键则为快捷键
      if (e.altKey) {
        if (e.keyCode == 83) {
          var button_sub = $("a[shortcutKey='S']");
          button_sub.click();
        }
      }
    } catch (e) {
      GLOBAL$BROWSER$.errorTrace(e);
    }
  });
}