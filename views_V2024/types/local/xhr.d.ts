import {
  asyncGetPost, asyncQueryPost
} from '../../views/g-lobal/xhr'
declare global {
  interface GLOBAL$XHR$V2024$TYPE {
    asyncGetPost: typeof asyncGetPost
    asyncQueryPost: typeof asyncQueryPost
  }
  let GLOBAL$XHR$V2024$: GLOBAL$XHR$V2024$TYPE
}
export {

}