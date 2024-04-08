import { Sjly, dicMzlx, error, getDdxx, getHzxx, getJyjl, getYsxx, getZdxx } from "../fun"
import { his_company_code, his_medical_org_code } from "../var"
export function rxReview(brxx: any, data: any, ysxx: any, sjly: Sjly = 100) {
  var outpati_inpati_flag = dicMzlx(sjly)
  return Promise.all([getDdxx(data, outpati_inpati_flag), getZdxx(data), getJyjl(), getYsxx(ysxx)]).then(([ddxx, zdxx, jyjl, ysxx1]) => {
    return window.YytPass.showInstruction({
      his_company_code,
      his_medical_org_code,
      his_time: Date.now(),
      is_formal_review: false,
      outpati_inpati_flag,
      treat_type: sjly,
      treat_code: brxx.mzh || brxx.zyh,
      doctor_info: ysxx1, // 医生信息
      patient_info: getHzxx(brxx), // 患者信息
      diagnosis: zdxx, // 诊断信息
      prescription_order_list: ddxx, // 订单信息
      inspect_info_list: jyjl// 检验记录
    }).then(error)
  })
}