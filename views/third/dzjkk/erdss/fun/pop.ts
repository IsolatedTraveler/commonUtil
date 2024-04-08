import { layerClose } from "../../../global/pop/layer"
import { scanCode } from "../../../global/pop/scanCode"
import { readJkkInfoReject } from "../var"
import { readJkkInfoByMagic } from "./readJkkInfoByMagic"

export function enterJkkNumber() {
  scanCode('请扫电子健康卡二维码获取患者基本信息：').then(({ code, data }) => {
    if (code == -1) {
      readJkkInfoByMagic(data).then(() => {
        layerClose()
      }).catch(res => {
        layerClose()
        readJkkInfoReject(res)
      })
    } else {
      layerClose()
      readJkkInfoReject(new Error('用户取消扫码操作'))
    }
  }).catch(readJkkInfoReject)
}