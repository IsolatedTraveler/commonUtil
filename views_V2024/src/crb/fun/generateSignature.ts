export function generateSignature(token: string, nonce: string, timestamp: string | number) {
  const str = [timestamp, nonce, token].sort().join('');
  const sha1 = CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);
  return bigInt(sha1, 16).toString();
}