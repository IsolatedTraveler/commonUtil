import {
  ajaxGet, ajaxPost, ajaxPost1
} from '../../g-lobal/xhr'
declare global {
  interface GLOBAL$XHR$V2024$TYPE {
    ajaxGet: typeof ajaxGet
    ajaxPost: typeof ajaxPost
    ajaxPost1: typeof ajaxPost1
  }
  let GLOBAL$XHR$V2024$: GLOBAL$XHR$V2024$TYPE
}
export {

}