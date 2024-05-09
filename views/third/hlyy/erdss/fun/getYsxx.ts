export function getYsxx(ysxx: any) {
  return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magicJq/YY15/05/10/s-ysxx', { ysid: ysxx.ryid }).then(({ data }) => {
    if (data) {
      data = (data.list || [])[0] || {}
      return {
        login_user_name: ysxx.yhm,
        doctor_job_num: ysxx.ryid, // 医生工号
        doctor_name: ysxx.xm,
        department_code: ysxx.ksid,
        doctor_level: data.zyzsbm || data.zgzsbm // 职称代码
      }
    }
  })
}