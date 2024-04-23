import { mkqx } from "../var"

export function possessMkqx(mkbh: string, dm?: string) {
  try {
    var id = mkbh
    if (dm) {
      id += '-' + dm
    }
    if (mkqx[id]) {
      return mkqx[id]
    } else {
      return mkqx[id] = GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magic/xt01-xtjc/03/11/s-mkqx', { mkbh, dm }).then(res => {
        if (res.code === 1) {
          const list = res.data.list || []
          if (dm) {
            return ((list[0] || {}).mr || 0) + ''
          } else {
            return list.reduce((accumulator: any, currentItem: any) => {
              accumulator[currentItem.dm] = currentItem.mr;
              return accumulator;
            }, {})
          }
        } else {
          GLOBAL$LAYER$.alertMsg('获取权限失败:' + res.message)
        }
      })
    }
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}