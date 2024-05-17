import {
  ajaxGet, ajaxPost
} from '../../g-lobal/xhr'
declare global {
  interface GLOBAL$XHR$V2024$TYPE {
    ajaxGet: typeof ajaxGet
    ajaxPost: typeof ajaxPost
  }
  let GLOBAL$XHR$V2024$: GLOBAL$XHR$V2024$TYPE
}
export {

}