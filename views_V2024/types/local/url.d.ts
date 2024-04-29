import {
  buildAbsoluteUrl, getAppBaseUrl, convertObjectToQueryString, buildUrlWithQueryParams, getServerUrl
} from '../../g-lobal/url'
declare global {
  interface GLOBAL$URL$V2024$TYPE {
    buildAbsoluteUrl: typeof buildAbsoluteUrl
    getAppBaseUrl: typeof getAppBaseUrl
    convertObjectToQueryString: typeof convertObjectToQueryString
    buildUrlWithQueryParams: typeof buildUrlWithQueryParams
    getServerUrl: typeof getServerUrl
  }
  let GLOBAL$URL$V2024$: GLOBAL$URL$V2024$TYPE
}
export {

}