import { getAppBaseUrl } from "../../url/public/getAppBaseUrl";
// 获取应用程序名
export const webName = `/${getAppBaseUrl().split('/').filter(Boolean).pop() || ''}/`