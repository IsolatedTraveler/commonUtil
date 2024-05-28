import { alertMsg } from "../../../g-lobal";
import { SHORTCUT_KEYS } from "../var";

export function domKeydown(e: KeyboardEvent) {
  try {
    const target = e.target;
    if (e.code === 'Backspace') {
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