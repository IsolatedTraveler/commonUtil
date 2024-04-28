import {
  buildAbsoluteUrl, getAppBaseUrl, getServerUrl
} from '../../views/g-lobal/url'
declare global {
  interface GLOBAL$URL$V2024$TYPE {
    buildAbsoluteUrl: typeof buildAbsoluteUrl
    getAppBaseUrl: typeof getAppBaseUrl
    getServerUrl: typeof getServerUrl
  }
  let GLOBAL$URL$V2024$: GLOBAL$URL$V2024$TYPE
}
export {

}