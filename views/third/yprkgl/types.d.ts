// window
declare global {
  interface Jt_third_yprkgl {
  }
  interface ErdssYprkglLoginParam {
    his_company_code: string
    his_medical_org_code: string
    username: string
    createPageBall: boolean
    position: any
  }
  type ErdssYprkglReturnCode = 200 | 1001 | 1098 | 1099 | 201 | 202
  interface ErdssYprkglReturn {
    code: ErdssYprkglReturnCode
    msg: string
    data?: any
  }
  interface ErdssYprkglYytPass {
    getKnowledgeBase: Function
    getRegistedStatus: Function
    getRoles: Function
    init: (param: ErdssYprkglLoginParam) => Promise<ErdssYprkglReturn>
    layer: any
    logout: Function
    prevAnalysis: Function
    refresh: Function
    rxReview: Function
    showInstruction: Function
    showRxReview: Function
    showTips: Function
    version: string
  }
  interface Window {
    jt_third_yprkgl: Jt_third_yprkgl
    YytPass: ErdssYprkglYytPass
  }
}
export {

}