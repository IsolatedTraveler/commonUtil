import {
  buildAbsoluteUrl, buildUrlWithQueryParams, convertObjectToQueryString, getAppBaseUrl, getServerUrl, getUrlParams
} from '../../g-lobal/url'
declare global {
  interface GLOBAL$URL$V2024$TYPE {
    buildAbsoluteUrl: typeof buildAbsoluteUrl
    buildUrlWithQueryParams: typeof buildUrlWithQueryParams
    convertObjectToQueryString: typeof convertObjectToQueryString
    getAppBaseUrl: typeof getAppBaseUrl
    getServerUrl: typeof getServerUrl
    getUrlParams: typeof getUrlParams
  }
  let GLOBAL$URL$V2024$: GLOBAL$URL$V2024$TYPE
}
export {

}