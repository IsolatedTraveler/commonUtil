import { UrlType } from "../../../../types";
import { convertToAbsoluteUrl } from "../fun";
import { getAppBaseUrl } from "./getAppBaseUrl";
import { getServerUrl } from "./getServerUrl";
/**
 * @description 根据URL类型，生成对应的绝对URL。
 * @param {string} targetUrl - 目标相对或绝对URL。
 * @param {'origin'} urlType - URL的构建基准类型，'origin'表示基于应用基础URL，默认表示基于服务端URL。
 * @returns {string} 完整的绝对URL。
 */
export function buildAbsoluteUrl(targetUrl: string, urlType: UrlType): string {
  if (/^http/.test(targetUrl)) {
    return targetUrl;
  } else if (urlType === 'origin') {
    return convertToAbsoluteUrl(targetUrl, getAppBaseUrl());
  } else {
    return convertToAbsoluteUrl(targetUrl, getServerUrl());
  }
}