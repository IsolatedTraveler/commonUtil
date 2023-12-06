import {
  getAllUrl, getUploadUrl, dealsUrl, getUrl, getParamsUrl, getUrlParams, getBaseUrl, getMainUrl, getServiceUrl
} from '../../g-lobal/url'
declare global {
  interface GLOBAL$URL$TYPE {
    getAllUrl: typeof getAllUrl
    getUploadUrl: typeof getUploadUrl
    dealsUrl: typeof dealsUrl
    getUrl: typeof getUrl
    getParamsUrl: typeof getParamsUrl
    getUrlParams: typeof getUrlParams
    getBaseUrl: typeof getBaseUrl
    getMainUrl: typeof getMainUrl
    getServiceUrl: typeof getServiceUrl
  }
  let GLOBAL$URL$: GLOBAL$URL$TYPE
}
export {

}