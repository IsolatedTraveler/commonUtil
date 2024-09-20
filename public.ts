import {InstitutionCode} from './build/var/config';
interface Dbnr {
  [key: string]: string[];
}
export const dbnr: Dbnr = {
  // cs: ['gncs'],
  // gModules: ['addInput'],
  gModules: [ 'blmb'],
  // layModules: [],
  // src: ['jtUtil'],
  // third: ['dzpj'],
  // webs: ['his\\ypgl\\pdgl\\pdjl']
};
export const dbdq: InstitutionCode[] = ['smq', 'wsq', 'bx'];
export const siteVesion = 'V2024';
// export const siteVesion = ''
// 是否压缩  false  不压缩    true   压缩
export const sfys = false;
// 是否保留注释   false    保留    true    不保留
export const qdzs = false;
// export const qdzs = /^!/
