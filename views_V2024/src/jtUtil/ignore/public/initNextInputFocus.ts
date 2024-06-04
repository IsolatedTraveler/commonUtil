import { alertMsg } from "../../../../g-lobal"

/**
 * 初始化表单中输入框的回车键焦点转移及快捷键功能
 * @param {string} formID 表单的ID
 * @param {string} [domID] 需要特殊处理的输入框ID，避免其后的输入获得焦点
 */
export function initNextInputFocus(formID: string, domID: string) {
  const $form = $('#' + formID)
  $form.on('keyup' as any, 'input, a.easyui-linkbutton', function (e: KeyboardEvent) {
    try {
      const target = e.target as HTMLInputElement
      if (e.key === 'Enter' && target.type !== 'submit') {
        if (domID && target.id === domID) return
        if (!e.target) return
        const $target = $(e.target)
          , prevElem = $target.parent().prev()
        if (!prevElem.is('.easyui-searchbox') && !prevElem.is('.easyui-combogrid')) {
          var $inputs = $form.find(':input:visible:not(:disabled):not([readonly]), a.easyui-linkbutton')
          const currentIndex = $inputs.index(target)
          if (currentIndex === $inputs.length - 1) {
            $inputs.first().select()
          } else {
            const $nextInput: any = $inputs[currentIndex + 1];
            $nextInput.focus()
            if ($nextInput.tagName == "INPUT") {
              $nextInput.select()
            }
          }
        }
      } else if (e.altKey && e.key === 's') {
        const $buttonSub = $('a[shortcutKey="S"]').first();
        $buttonSub.click();
      }
    } catch (e: any) {
      alertMsg(e)
    }
  })
}