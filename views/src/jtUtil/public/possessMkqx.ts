export function possessMkqx(mkbh: string, dm?: string) {
  try {
    var res = GLOBAL$AJAX$.commonHttppost('/magic/xt01-xtjc/03/11/s-mkqx', { mkbh, dm })
    if (res.code === 1) {
      const list = res.data.list || []
      if (dm) {
        return ((list[0] || {}).mr || 0) + ''
      } else {
        return list.reduce(({ dm, mr }: any) => {
          dm[dm] = mr + ''
          return dm
        }, {})
      }
    } else {
      GLOBAL$LAYER$.alertMsg('获取权限失败:' + res.message)
    }
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}