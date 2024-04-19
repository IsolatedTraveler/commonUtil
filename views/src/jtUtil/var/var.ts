type ShortcutKeysFun = () => void
interface ShortcutKeys {
  [key: string]: ShortcutKeysFun
}
export var shortcutKeys: ShortcutKeys
export function setShortcutKeys(keys: any) {
  shortcutKeys = keys
}