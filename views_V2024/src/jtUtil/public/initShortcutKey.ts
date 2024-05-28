import { domKeydown } from "../fun";
// 设置快捷键
export function initShortcutKey() {
  document.addEventListener('keydown', domKeydown)
}