export function possessMkqx(mkbh: string, dm?: string) {
  try {
    var res = GLOBAL$AJAX$.commonHttppost('', { mkbh, dm })
    if (res.code === 1) {
      return res.data.list
    } else {
      GLOBAL$LAYER$.alertMsg('获取权限失败:' + res.message)
    }
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}