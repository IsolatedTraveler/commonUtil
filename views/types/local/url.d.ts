import {
  getAllUrl, getUploadUrl, dealsUrl, getUrl, getObjToUrl, getParamsUrl, getUrlParams, getBaseUrl, getMainUrl, getServiceUrl, strToUrl
} from '../../views/g-lobal/url'
declare global {
  interface GLOBAL$URL$TYPE {
    getAllUrl: typeof getAllUrl
    getUploadUrl: typeof getUploadUrl
    dealsUrl: typeof dealsUrl
    getUrl: typeof getUrl
    getObjToUrl: typeof getObjToUrl
    getParamsUrl: typeof getParamsUrl
    getUrlParams: typeof getUrlParams
    getBaseUrl: typeof getBaseUrl
    getMainUrl: typeof getMainUrl
    getServiceUrl: typeof getServiceUrl
    strToUrl: typeof strToUrl
  }
  let GLOBAL$URL$: GLOBAL$URL$TYPE
}
export {

}