import {
  assembleAbsoluteUrl, determineApplicationBaseUrl, obtainServiceEndpoint
} from '../../views/g-lobal/url'
declare global {
  interface GLOBAL$URL$V2024$TYPE {
    assembleAbsoluteUrl: typeof assembleAbsoluteUrl
    determineApplicationBaseUrl: typeof determineApplicationBaseUrl
    obtainServiceEndpoint: typeof obtainServiceEndpoint
  }
  let GLOBAL$URL$V2024$: GLOBAL$URL$V2024$TYPE
}
export {

}