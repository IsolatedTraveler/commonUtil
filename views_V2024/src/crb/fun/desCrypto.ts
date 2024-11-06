export function desCrypto(data: string, key: string) {
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const ivHex = CryptoJS.enc.Utf8.parse(key.slice(0, 8)); // 使用密钥的前8个字符作为IV
  const encrypted = CryptoJS.DES.encrypt(data, keyHex, {iv: ivHex, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
  return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}
