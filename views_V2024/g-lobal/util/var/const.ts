import { getAppBaseUrl } from "../../url";
// 获取应用程序名
export const webName = `/${getAppBaseUrl().split('/').filter(Boolean)}/`