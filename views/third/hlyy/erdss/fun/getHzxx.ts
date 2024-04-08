export function getHzxx(brxx: any = {}) {
  return {
    patient_name: brxx.xm,
    birthday: (brxx.csrq || '').split(' ')[0].replace(/-/g, ''),
    sex: (brxx.xb || '').split(',')[0] || '',
    weight: brxx.tz,
    height: brxx.sg,
    medical_record: "self-pay",
    medical_record_type: "9",
    medical_insurance_type: "",
    is_pregnancy: false, // 是否怀孕 非必填
    is_lactation: false, // 是否哺乳 非必填
    conception_date: 0, // 受孕时间 数字表示天数或周数、月数   非必填
    conception_date_unit: ''// 受孕时间单位   非必填
  }
}