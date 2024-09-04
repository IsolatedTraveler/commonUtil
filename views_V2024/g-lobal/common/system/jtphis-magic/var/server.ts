import {dealUrl} from '../../../../url/fun/dealUrl';
import {extractPrimaryUrl} from '../../../../url/fun/extractPrimaryUrl';
import {getAppBaseUrl} from '../../../../url/public/getAppBaseUrl';
import {hisConfig} from './config';

export var serverUrl = '',
  SYSTEM: any = getSystem();

export function setServerUrl(): string {
  const url = new URL(extractPrimaryUrl(hisConfig.magicServer || getAppBaseUrl()));
  return (serverUrl = dealUrl(url.origin, url.pathname));
}
export function getSystem() {
  try {
    return (SYSTEM = window.jthisJsObject.jthis);
  } catch (_err) {
    return;
  }
}
