import { alertMsg } from "../../../g-lobal";
import { SHORTCUT_KEYS } from "../var";
/**
 * 监听文档级别的键盘按下事件，处理快捷键和控制不可编辑元素上的退格键行为。
 * @param {KeyboardEvent} e - 触发的键盘事件。
 */
export function domKeydown(e: KeyboardEvent) {
  try {
    const target: any = e.target;
    if (e.code === 'Backspace' && target) {
      let disabled = false;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        disabled = target.readOnly || target.disabled;
      } else if (target instanceof HTMLDivElement && target.contentEditable === 'true') {
        disabled = target.hasAttribute('readonly') || target.hasAttribute('disabled');
      } else {
        disabled = true;
      }
      if (disabled) {
        e.preventDefault();
      }
    }
    if (SHORTCUT_KEYS[e.code]) {
      SHORTCUT_KEYS[e.code]();
    }
  }
  catch (e) {
    alertMsg(e);
  }
}