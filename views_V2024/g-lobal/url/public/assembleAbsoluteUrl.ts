import { UrlType } from "../../../../views/g-lobal/url/type";
import { resolveRelativeUrl } from "../fun/resolveRelativeUrl";
import { determineApplicationBaseUrl } from "./determineApplicationBaseUrl";
import { obtainServiceEndpoint } from "./obtainServiceEndpoint";
// 根据给定URL和类型，构建完整的绝对URL。
export function assembleAbsoluteUrl(url: string, type: UrlType) {
  if (/^http/.test(url)) {
    return url;
  } else if (type === 'origin') {
    return resolveRelativeUrl(url, determineApplicationBaseUrl());
  } else {
    return resolveRelativeUrl(url, obtainServiceEndpoint());
  }
}