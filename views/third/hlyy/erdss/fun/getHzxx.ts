export function getHzxx(brxx: any = {}) {
  var birthday = (brxx.csrq || '').split(' ')[0].replace(/-/g, '')
  if (!birthday) {
    birthday = GLOBAL$UTIL$.idCard(brxx.sfzh).data.csrq || ''
  }
  return {
    patient_name: brxx.xm,
    birthday: birthday,
    sex: (brxx.xb || '').split(',')[0] || '',
    weight: brxx.tz,
    height: brxx.sg,
    certificate_number: brxx.sfzh,
    medical_record: "self-pay",
    medical_record_type: "9",
    medical_insurance_type: "",
    complained: null,
    hpi: null,
    tcm_syndrome: '',// v2新增字段  中医证型（中成药开具需要）
    onset_time: null,
    is_pregnancy: false, // 是否怀孕 非必填
    is_lactation: false, // 是否哺乳 非必填
    conception_date: 0, // 受孕时间 数字表示天数或周数、月数   非必填
    conception_date_unit: ''// 受孕时间单位   非必填
    , allergic_records: []// 过敏原
  }
}