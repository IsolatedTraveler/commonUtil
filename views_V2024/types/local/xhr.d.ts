import {
  getAjax, asyncQueryGet, asyncQueryPost, commonHttppost
} from '../../g-lobal/xhr'
declare global {
  interface GLOBAL$XHR$V2024$TYPE {
    getAjax: typeof getAjax
    asyncQueryGet: typeof asyncQueryGet
    asyncQueryPost: typeof asyncQueryPost
    commonHttppost: typeof commonHttppost
  }
  let GLOBAL$XHR$V2024$: GLOBAL$XHR$V2024$TYPE
}
export {

}