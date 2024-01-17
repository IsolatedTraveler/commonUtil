import { dicUrl, setIsInit, setStartRule } from "./var"

export const Class = function () {
  setIsInit(GLOBAL$AJAX$.getAjaxSync(dicUrl, {}).then(setStartRule))
} as unknown as ClassConstructor