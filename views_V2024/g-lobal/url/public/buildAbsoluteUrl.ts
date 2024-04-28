import { UrlType } from "../../../../types";
import { convertToAbsoluteUrl } from "../fun";
import { getAppBaseUrl } from "./getAppBaseUrl";
import { getServerUrl } from "./getServerUrl";
// 根据给定URL和类型，构建完整的绝对URL。
export function buildAbsoluteUrl(targetUrl: string, urlType: UrlType) {
  if (/^http/.test(targetUrl)) {
    return targetUrl;
  } else if (urlType === 'origin') {
    return convertToAbsoluteUrl(targetUrl, getAppBaseUrl());
  } else {
    return convertToAbsoluteUrl(targetUrl, getServerUrl());
  }
}