import { appCertificate, appId } from './init';
import { AccessToken2, ServiceRtc } from './setToken'
export let token
let ts = 1111111, expire = 600, salt = 1
export function getToken(channel) {
  var Token = new AccessToken2(appId, appCertificate, ts, expire);
  Token.salt = salt;
  let rtc_service = new ServiceRtc(channel, 0)
  rtc_service.add_privilege(ServiceRtc.kPrivilegeJoinChannel, expire)
  Token.add_service(rtc_service)
  token = Token.build();
  return token
};