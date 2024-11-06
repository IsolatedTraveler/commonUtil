import { uuid } from "../../../g-lobal";
import { desCrypto } from "./desCrypto";
import { generateSignature } from "./generateSignature";

export function prepareData(data:any, token:string) {
  // 加密数据
  const nonce = uuid(),
    timestamp = new Date().getTime();
  // 计算MD5校验码
  const dataMD5 = CryptoJS.MD5(data).toString(CryptoJS.enc.Hex);
  // 生成签名
  const signature = generateSignature(token, nonce, timestamp);
  // 数据加密密钥
  const encodedData = desCrypto(data, token + timestamp);
  return {
    encodedData,
    dataMD5,
    signature,
    timestamp,
    nonce
  };
}
