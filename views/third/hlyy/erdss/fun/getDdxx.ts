import { gytj, setGytj, setYypl, yypl } from "../var"
import { Mzlx, dicCflb, dicCflx, dicYzlx } from "./dic"

export function getDdxx(xdd: any, lx: Mzlx) {
  return Promise.all([getYypl(), getGytj()]).then(() => {
    return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magicJq/YY15/05/10/s-lsyzxx', { zyid: xdd.zyid }).then(({ data }) => {
      if (data) {
        data = data.list || []
        return getCfxx(0, data, lx).concat(getCfxx(1, xdd.yzxx, lx))
      }
    })
  })
}
function getYypl() {
  if (yypl) {
    return Promise.resolve(yypl)
  } else {
    return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magicJq/yy10/01/10/s-yypl', {}).then(({ data: { list } }) => {
      var obj = {} as any
      (list || []).forEach((it: any) => {
        obj[it.dm] = it.cs
      })
      setYypl(obj)
    })
  }
}
function getGytj() {
  if (gytj) {
    return Promise.resolve(gytj)
  } else {
    return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magicJq//yy10/01/10/s-gytj', {}).then(({ data: { list } }) => {
      var obj = {} as any
      (list || []).forEach((it: any) => {
        obj[it.mc] = it.dm
      })
      setGytj(obj)
    })
  }
}
function getDay(yp: any) {
  const cs = Math.floor((yp.zl || 1) * (yp.jlxs || 1) / (yp.dcjl || 1)), zxpl = (yp.zxpl || '')[0]
    , yyplcs = yypl[zxpl] || 1
  return cs / yyplcs
}
function getCfxx(is_current: number, ddxx: any, lx: Mzlx) {
  // 将dm变为ypid
  return ddxx.map((it: any, i: number) => {
    var yzmx = it.yzmx || [], kszxrq: any = it.kszxrq ? new Date(it.kszxrq) : new Date()
      , yzlx = dicYzlx(lx, it.yzlx == '1'), [yzlxCode, yzlxMc] = dicCflb(yzlx)
    return {
      prescription_order_num: it.id || GLOBAL$UTIL$.uuid(),//处方号
      prescription_type: dicCflx((yzmx[0] || {}).xmlb),// 处方类型
      prescription_category_code: yzlxCode, // v2新增字段 处方类别代码
      prescription_category_name: yzlxMc, // v2新增字段 处方类别名称
      prescription_order_reason: '', // 处方医嘱理由
      is_current: is_current, // 处方类型
      medical_advice_type: yzlx, // 医嘱类型
      prescription_time: (it.kzrq ? new Date(it.kzrq) : new Date() as any).format('yyyy-MM-dd hh:mm:ss'), // 处方时间
      amount: '', // 处方金额
      drug_info_list: yzmx.map((yp: any, i: number) => {
        var day = getDay(yp)
        const [zxplDm = '', zxplmc = zxplDm] = GLOBAL$UTIL$.divideString(it.zxpl)
        return {
          pres_order_detail_num: i, // 医嘱明细序号
          pres_order_detail_status: '', // 医嘱明细状态  非必填
          his_drug_code: yp.ypid, // 药品代码
          drug_trade_name: yp.xmmc, // 药品名
          specification_value: yp.ypgg, // v2新增字段 规格
          insurance_drug_code: '', // 药品医保代码  非必填
          pharmac_reason: '', // 用药理由  非必填
          group_number: 1, // 组号
          drug_quantity: yp.zl, // 开药数量
          drug_quantity_unit: yp.zldw,// 开药数量单位
          drug_quantity_unit_code: yp.zldw, // 开药数量单位编码
          dose: yp.dcjl,// 单次剂量
          dose_unit: yp.jldw,// 单次剂量单位
          dose_unit_code: yp.jldw,// 单次剂量单位编码
          freq_code: zxplDm,// 频次代码
          freq_name: zxplmc, // v2新增字段 频次名称
          route_code: gytj[it.xmmc] || '', // 途径代码
          route_name: it.xmmc, // v2新增字段 His的给药途径名称
          start_time: kszxrq.format('yyyy-MM-dd hh:mm:ss'),// 要用开始时间
          end_time: kszxrq.addDay(day).format('yyyy-MM-dd hh:mm:ss'),// 用药结束时间
          medication_days: Math.floor(day),// 服药天数
          skin_test: '' // 皮试结果 string 0 未做, 1 阳性, 2 阴性  非必填
        }
      }) // 药品信息
    }
  })
}