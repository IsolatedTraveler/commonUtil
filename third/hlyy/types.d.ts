// window
declare global {
  interface Jt_third_hlyy {
  }
  interface ErdssHlyyLoginParam {
    his_company_code: string
    his_medical_org_code: string
    username: string
    createPageBall: boolean
    position: any
  }
  type ErdssHlyyReturnCode = 200 | 1001 | 1098 | 1099 | 201 | 202
  interface ErdssHlyyReturn {
    code: ErdssHlyyReturnCode
    msg: string
    data?: any
  }
  interface ErdssHlyyYytPass {
    getKnowledgeBase: Function
    getRegistedStatus: Function
    getRoles: Function
    init: (param: ErdssHlyyLoginParam) => Promise<ErdssHlyyReturn>
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
    jt_third_hlyy: Jt_third_hlyy
    YytPass: ErdssHlyyYytPass
  }
}
export {

}