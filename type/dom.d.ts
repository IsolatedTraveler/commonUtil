export { }
import CryptoJS from 'crypto-js';
import bigInt from 'big-integer';
declare global {
  interface SelectOption {
    [k: string]: string | number
  }
  const CryptoJS: CryptoJS;
  const bigInt: bigInt;
}