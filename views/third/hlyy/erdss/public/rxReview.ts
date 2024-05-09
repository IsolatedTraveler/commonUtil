import { Sjly, confirm, dicMzlx, error, getDdxx, getHzxx, getJyjl, getYsxx, getZdxx, showTip } from "../fun"
import { his_company_code, his_medical_org_code } from "../var"
export function rxReview(brxx: any, data: any, ysxx: any, sjly: Sjly = 100) {
  var outpati_inpati_flag = dicMzlx(sjly)
  return Promise.all([getDdxx(data, outpati_inpati_flag), getZdxx(data), getJyjl(), getYsxx(ysxx)]).then(([ddxx, zdxx, jyjl, ysxx1]) => {
    return window.YytPass.rxReview({
      his_company_code,
      his_medical_org_code,
      his_time: Date.now(),
      is_formal_review: true,
      outpati_inpati_flag,
      treat_type: sjly,
      treat_code: brxx.mzh || brxx.zyh,
      bed_number: '',
      doctor_info: ysxx1, // 医生信息
      patient_info: getHzxx(brxx), // 患者信息
      diagnosis: zdxx, // 诊断信息
      prescription_order_list: ddxx, // 订单信息
      inspect_info_list: jyjl// 检验记录
    }).then(error).then((data: any) => {
      var resultCode = data.resultCode;
      // 风险提示
      var summary = data.summary;
      var blockProblem = data.blockProblem;
      // 处方分析返回的状态码 resultCode, approve 表示是否通过审核，extra 表示需要单独处理
      var codesArray = [
        { code: '00', msg: '【00】不明', approve: false, extra: true },
        { code: '01', msg: '【01】AI 审核通过', approve: true },
        { code: '02', msg: '【02】人工审核通过', approve: true },
        { code: '03', msg: '【03】人工审核警告通过', approve: true },
        { code: '10', msg: '【10】待人工审核', approve: false },
        { code: '11', msg: '【11】超时', approve: false, extra: true },
        { code: '30', msg: '【30】AI 审核打回', approve: false },
        { code: '31', msg: '【31】人工审核打回', approve: false },
        { code: '99', msg: '【99】其他', approve: false, extra: true }
      ]
      var currentStatus: any = (function () {
        var o = {};
        for (var i = 0; i < codesArray.length; i++) {
          if (codesArray[i].code === resultCode) {
            o = codesArray[i]
            break;
          }
        }
        return o;
      })();
      if (currentStatus.approve) {
        return;
      }
      if (currentStatus.extra) {
        // TODO 单独处理，一般情况下不会出现。
        return showTip(currentStatus.msg, '警告')
      }
      return confirm(data.severity, summary, blockProblem)
    })
  })
}