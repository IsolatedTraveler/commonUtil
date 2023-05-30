import { commonHttppost, commonQueryAsyncHttppost_callback } from "../fun/ajax";
import { setPageTemp } from "../fun/deeps";
import { getFaceUrl } from "../fun/url";
import { timeDiff } from "../../var/systemData";
function setSystemTime() {
  let now = new Date(), date = now.addHour(1).getTime(), sd = commonHttppost('/zs01-xtjc/s-time', {}, {isGetUser: false}).data[0].sd
  timeDiff = {
    v: sd ? now - new Date(sd) : 0
    ,date
  }
}
export function getSystemTime() {
  setPageTemp(timeDiff, setSystemTime)
  let now = new Date()
  if (timeDiff.date < now.getTime()) {
    setSystemTime()
  }
  now = new Date()
  return timeDiff.v ? new Date(now - timeDiff.v) : now
}
export function getRyxx(ksid, ryxz, bz, ryzw) {
  return commonQueryAsyncHttppost_callback('/zs02-ywjc/ryxxgl/s-bmryxx', {ksid, ryxz, ryzw}).then(res => {
    return res.data
  })
}
export function faceVerify(param, options) {
  options = Object.assign({
    left_eye: {
      val: 0.4,
      msg: '左眼被遮挡，请重新采集'
    }, 
    right_eye: {
      val: 0.4,
      msg: '右眼被遮挡，请重新采集'
    }, 
    nose: {
      val: 0.4,
      msg: '鼻子被遮挡，请重新采集'
    }, 
    mouth: {
      val: 0.4,
      msg: '嘴巴被遮挡，请重新采集'
    }, 
    left_cheek: {
      val: 0.4,
      msg: '左脸被遮挡，请重新采集'
    }, 
    right_cheek: {
      val: 0.4,
      msg: '右脸被遮挡，请重新采集'
    }, 
    chin_contour: {
      val: 0.4,
      msg: '下巴被遮挡，请重新采集'
    }
  }, options)
  return commonQueryAsyncHttppost_callback(getFaceUrl(), param).then(res => {
    if(res.code == '1'){
      if(res.face_num > 0){
        var faceData = res.face_list[0], quality = faceData.quality, occlusion = quality.occlusion, keys = Object.keys(options)
        for (let key in keys) {
          let check = options[key]
          if (check) {
            if (occlusion[key] >= check.val) {
              return Promise.reject({msg: '人脸校验失败：' + check.msg})
            }
          }
        }
      } else {
        return Promise.reject({msg: '未识别到人脸,请对准摄像头后重新采集'})
      }
    }else {
      return Promise.reject({msg: '人脸校验失败：' + res.msg})
    }
  })
}
export default {
  getSystemTime,
  getRyxx,
  faceVerify
}