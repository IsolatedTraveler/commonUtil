import { getAppBaseUrl } from "../../url/public/getAppBaseUrl";
// 获取应用程序名
export const WEBNAME = `/${getAppBaseUrl().split('/').filter(Boolean).pop() || ''}/`