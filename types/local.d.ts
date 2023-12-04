import {
  getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload, bbPrint, getSystemVal,
  getBrowserParam, setBrowserParam, getUser, logOut, exit, paramget, setWebName, readFile, alertMsg, load, loaded, loading,
  confirmMsg, session, setPageTemp, tempData, getAllUrl, getUploadUrl, dealsUrl, getUrl, getParamsUrl, getUrlParams, getBaseUrl,
  getMainUrl, getServiceUrl, uuid, debounce1
} from '../g-lobal/index'
declare global {
  type GetSystemVal = typeof getSystemVal
  type CommonHttppost = typeof commonHttppost
  type GetAjax = typeof getAjax
  type SetPageTemp = typeof setPageTemp
  let getAjax: typeof getAjax
  let getAjaxSync: typeof getAjaxSync
  let commonHttppost: typeof commonHttppost
  let commonQueryAsyncHttppost_callback: typeof commonQueryAsyncHttppost_callback
  let getConfig: typeof getConfig
  let upload: typeof upload
  let bbPrint: typeof bbPrint
  let getSystemVal: typeof getSystemVal
  let getBrowserParam: typeof getBrowserParam
  let setBrowserParam: typeof setBrowserParam
  let getUser: typeof getUser
  let logOut: typeof logOut
  let exit: typeof exit
  let paramget: typeof paramget
  let setWebName: typeof setWebName
  let readFile: typeof readFile
  let alertMsg: typeof alertMsg
  let load: typeof load
  let loaded: typeof loaded
  let loading: typeof loading
  let confirmMsg: typeof confirmMsg
  let session: typeof session
  let tempData: typeof tempData
  let setPageTemp: typeof setPageTemp
  let getAllUrl: typeof getAllUrl
  let getUploadUrl: typeof getUploadUrl
  let dealsUrl: typeof dealsUrl
  let getUrl: typeof getUrl
  let getParamsUrl: typeof getParamsUrl
  let getUrlParams: typeof getUrlParams
  let getBaseUrl: typeof getBaseUrl
  let getMainUrl: typeof getMainUrl
  let getServiceUrl: typeof getServiceUrl
  let uuid: typeof uuid
  let debounce1: typeof debounce1
}
export {

}