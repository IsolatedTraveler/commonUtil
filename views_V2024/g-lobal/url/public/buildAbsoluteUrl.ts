import { UrlType } from "../../type";
import { convertToAbsoluteUrl } from "../fun";
import { getAppBaseUrl } from "./getAppBaseUrl";
import { getServerUrl } from "./getServerUrl";
export function buildAbsoluteUrl(targetUrl: string, urlType?: UrlType): string {
  if (/^http/.test(targetUrl)) {
    return targetUrl;
  } else if (urlType === 'origin') {
    return convertToAbsoluteUrl(targetUrl, getAppBaseUrl());
  } else if (urlType === 'local') {
    return convertToAbsoluteUrl(targetUrl, location.href);
  } else {
    return convertToAbsoluteUrl(targetUrl, getServerUrl());
  }
}