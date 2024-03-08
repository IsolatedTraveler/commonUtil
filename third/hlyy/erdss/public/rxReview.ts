import { his_company_code, his_medical_org_code } from "../var"
type Sjly = 100 | 101 | 102 | 200 | 300 | 400 | 401 | 500 | 999
/**
* @description 数据来源说明
* @author 何波
* @date 2024-03-08 15:11:07
* @param {
*   100: 普通门诊
*   101: 专科门诊
*   102: 专家门诊
*   200: 急诊
*   300: 急诊观察
*   400: 普通住院
*   401: 特需住院
*   500: 家床
*   999: 其他
* } 
*/
export function rxReview(brxx: any, ysxx: any, ddxx: any, zdxx: Array<any> = [], jyjl: Array<any> = [], sjly: Sjly = 100) {
  var outpati_inpati_flag = 'op'
  if (sjly == 400 || sjly == 401) {
    outpati_inpati_flag = 'ip'
  } else if (sjly == 500) {
    outpati_inpati_flag = 'opip'
  }
  window.YytPass.showInstruction({
    his_company_code,
    his_medical_org_code,
    his_time: Date.now(),
    is_formal_review: false,
    outpati_inpati_flag,
    treat_type: sjly,
    treat_code: brxx.mzh,
    doctor_info: {
      doctor_job_num: ysxx.ysdm, // 医生工号
      doctor_name: ysxx.ysxm,
      department_code: ysxx.ksdm,
      doctor_level: ysxx.zcdm // 职称代码
    }, // 医生信息
    patient_info: {
      patient_name: brxx.xm,
      birthday: brxx.csrq,
      sex: brxx.xb,
      weight: brxx.tz,
      height: brxx.sg,
      medical_record: "self-pay",
      medical_record_type: "9",
      medical_insurance_type: "",
      is_pregnancy: false, // 是否怀孕 非必填
      is_lactation: false, // 是否哺乳 非必填
      conception_date: 0, // 受孕时间 数字表示天数或周数、月数   非必填
      conception_date_unit: ''// 受孕时间单位   非必填
    }, // 患者信息
    diagnosis: zdxx.map((it: any, i: number) => {
      return {
        diagnostic_seq_num: i == 0 ? 11 : (20 + i), // 诊断顺序号
        diagnosis_type_code: '', // 诊断类别代码
        diagnosis_name: it.jbmc,// 诊断名称
        diagnosis_code: it.jbdm // 疾病代码
      }
    }), // 诊断信息
    prescription_order_list: ddxx.map((it: any) => {
      return {
        prescription_order_num: '',//处方号
        prescription_type: '',// 处方类型
        prescription_order_reason: '', // 处方医嘱理由
        is_current: '', // 处方类型
        medical_advice_type: '', // 医嘱类型
        prescription_time: '', // 处方时间
        amount: '', // 处方金额
        prescription_order_list: it.ypmx((yp: any) => {
          return {
            pres_order_detail_num: '', // 医嘱明细序号
            pres_order_detail_status: '', // 医嘱明细状态
            his_drug_code: '', // 药品代码
            drug_trade_name: '', // 药品名
            insurance_drug_code: '', // 药品医保代码
            pharmac_reason: '', // 用药理由
            group_number: '', // 组号
            drug_quantity: '', // 开药数量
            drug_quantity_unit: '',// 开药数量
            drug_quantity_unit_code: '', // 开药数量单位编码
            dose: '',// 单次剂量
            dose_unit: '',// 单次剂量单位
            dose_unit_code: '',// 单次剂量单位编码
            freq_code: '',// 频次代码
            route_code: '', // 途径代码
            start_time: '',// 要用开始时间
            end_time: '',// 用药结束时间
            medication_days: '',// 服药天数
            skin_test: '' // 皮试结果 string 0 未做, 1 阳性, 2 阴性
          }
        }) // 药品信息
      }
    }), // 订单信息
    inspect_info_list: jyjl.map((it) => {
      return {
        test_inspect_id: '',
        app_department_id: '',
        app_date: '',
        report_id: '',
        report_department_id: '',
        report_date: '',
        check_date: '',
        test_inspect_name: '',
        test_inspect_code: '',
        result_value: '',
        unit: ''
      }
    }) // 检验记录
  })
}