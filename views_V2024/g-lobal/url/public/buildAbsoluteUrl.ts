import { UrlType } from "../../../../types";
import { convertToAbsoluteUrl } from "../fun";
import { establishAppBaseUrl } from "./establishAppBaseUrl";
import { fetchServiceEndpoint } from "./fetchServiceEndpoint";
// 根据给定URL和类型，构建完整的绝对URL。
export function buildAbsoluteUrl(targetUrl: string, urlType: UrlType) {
  if (/^http/.test(targetUrl)) {
    return targetUrl;
  } else if (urlType === 'origin') {
    return convertToAbsoluteUrl(targetUrl, establishAppBaseUrl());
  } else {
    return convertToAbsoluteUrl(targetUrl, fetchServiceEndpoint());
  }
}