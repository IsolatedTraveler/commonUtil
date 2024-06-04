import { domKeydown } from "../fun";
/**
 * 初始化全局键盘快捷键监听器。
 * 
 * 此函数注册一个事件监听器，用于监听文档级的 `keydown` 事件，以便响应全局键盘快捷键。
 */
export function initShortcutKey() {
  document.addEventListener('keydown', domKeydown)
}