import { shortcutKeys } from "../var";

export function initShortcutKey() {
  $(document).keydown(function (e: KeyboardEvent) {
    try {
      var keyEvent;
      if (e.code === 'Backspace') {
        var d = e.target as unknown as (HTMLInputElement | HTMLTextAreaElement);
        if (d.tagName.toUpperCase() === 'INPUT' || d.tagName.toUpperCase() === 'TEXTAREA' || (d.tagName.toUpperCase() === 'DIV' && (<HTMLDivElement>d).contentEditable === 'true')) {
          keyEvent = d.readOnly || d.disabled
        } else {
          keyEvent = true;
        }
      } else {
        keyEvent = false;
      }
      if (keyEvent) {
        e.preventDefault();
      }
      if (shortcutKeys && shortcutKeys[e.code]) {
        shortcutKeys[e.code]()
      }
    } catch (e) {
      GLOBAL$BROWSER$.errorTrace(e)
    }
  });
}