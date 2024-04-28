import {
  getConfig, getUser
} from '../../views/g-lobal/system'
declare global {
  interface GLOBAL$SYSTEM$V2024$TYPE {
    getConfig: typeof getConfig
    getUser: typeof getUser
  }
  let GLOBAL$SYSTEM$V2024$: GLOBAL$SYSTEM$V2024$TYPE
}
export {

}