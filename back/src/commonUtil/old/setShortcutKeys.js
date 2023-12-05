import { shortcutKeys } from "../var/old";

export function setShortcutKeys(keys) {
  shortcutKeys = keys;
}
export function initShortcutKey() {
  $(document).keydown(function (e) {
    try {
      var keyEvent;
      if (e.keyCode == 8) {
        //防止退格键页面回退
        var d = e.srcElement || e.target;
        if (
          d.tagName.toUpperCase() == "INPUT" ||
          d.tagName.toUpperCase() == "TEXTAREA" ||
          d.tagName.toUpperCase() == "DIV"
        ) {
          keyEvent = d.readOnly || d.disabled;
        } else {
          keyEvent = true;
        }
      } else {
        keyEvent = false;
      }
      if (keyEvent) {
        e.preventDefault();
      }
      if (e.keyCode == 112) {
        if (shortcutKeys["F1"]) {
          shortcutKeys["F1"]();
        }
      } else if (e.keyCode == 113) {
        if (shortcutKeys["F2"]) {
          shortcutKeys["F2"]();
        }
      } else if (e.keyCode == 114) {
        if (shortcutKeys["F3"]) {
          shortcutKeys["F3"]();
        }
      } else if (e.keyCode == 115) {
        if (shortcutKeys["F4"]) {
          shortcutKeys["F4"]();
        }
      } else if (e.keyCode == 116) {
        if (shortcutKeys["F5"]) {
          shortcutKeys["F5"]();
        }
      } else if (e.keyCode == 117) {
        if (shortcutKeys["F6"]) {
          shortcutKeys["F6"]();
        }
      } else if (e.keyCode == 118) {
        if (shortcutKeys["F7"]) {
          shortcutKeys["F7"]();
        }
      } else if (e.keyCode == 119) {
        if (shortcutKeys["F8"]) {
          shortcutKeys["F8"]();
        }
      } else if (e.keyCode == 120) {
        if (shortcutKeys["F9"]) {
          shortcutKeys["F9"]();
        }
      } else if (e.keyCode == 121) {
        if (shortcutKeys["F10"]) {
          shortcutKeys["F10"]();
        }
      } else if (e.keyCode == 122) {
        if (shortcutKeys["F11"]) {
          shortcutKeys["F11"]();
        }
      } else if (e.keyCode == 123) {
        if (shortcutKeys["F12"]) {
          shortcutKeys["F12"]();
        }
      } else if (e.keyCode == 27) {
        if (shortcutKeys["ESC"]) {
          shortcutKeys["ESC"]();
        }
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  });
}
