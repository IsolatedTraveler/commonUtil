declare var that: any
import CryptoJS from 'crypto-js';
import bigInt from 'big-integer';
declare interface Window {
  layer: any;
  layui: any;
  MODULENAME: any;
  jthisJsObject: any;
  wdphisJsObject: any;
  getClodop: any;
  CryptoJS: CryptoJS;
  bigInt: BigInteger;
}
declare global {
  const CryptoJS: CryptoJS;
  const bigInt: bigInt;
}