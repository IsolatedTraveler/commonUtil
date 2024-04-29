import { shortcutKeys } from "../var";
/**
 * @description 初始化全局键盘快捷键功能，特别是针对 Backspace 键的处理，
 * 以防止在不可编辑或只读的输入区域意外删除内容，并支持自定义快捷键执行。
 */
export function initShortcutKey() {
  $(document).keydown(function (e: KeyboardEvent) {
    try {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLDivElement;
      if (e.code === 'Backspace') {
        let disabled = false
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
          disabled = target.readOnly || target.disabled
        } else if (target instanceof HTMLDivElement && target.contentEditable === 'true') {
          disabled = target.hasAttribute('readonly') || target.hasAttribute('disabled')
        } else {
          disabled = true
        }
        if (disabled)
          e.preventDefault()
      }
      if (shortcutKeys && shortcutKeys[e.code]) {
        shortcutKeys[e.code]()
      }
    } catch (e) {
      GLOBAL$LAYER$V2024$.alertMsg(e)
    }
  });
}