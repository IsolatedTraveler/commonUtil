// window
import {
  commonQueryAsyncHttppost_callback
} from '../../../g-lobal/ajax'
declare global {
  interface JtSync {
    commonQueryAsyncHttppost_callback: typeof commonQueryAsyncHttppost_callback
  }
  interface Window {
    jtSync: JtSync
  }
}
export {

}