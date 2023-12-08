import { mac, setMac } from "../var";
import { local } from "./local";

export function getMac() {
  if (!mac) {
    setMac(local('mac'))
    if (!mac) {
      try {
        setMac(JSON.parse(GLOBAL$BROWSER$.getSystemVal("GetSystemInfo")).data.mac)
      } catch (e) {
        console.error("该浏览器未提供GetSystemInfo方法");
      }
      local("mac", mac);
    }
  }
  return mac;
}