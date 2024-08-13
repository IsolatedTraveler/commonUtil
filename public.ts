import { InstitutionCode } from "./build/var/config"
interface Dbnr {
  [key: string]: string[]
}
export const dbnr: Dbnr = {
  // cs: ['gncs'],
  gModules: ['addInput'],
  // layModules: [],
  src: ['jtUtil', 'jtSync'],
  third: ['dzpj'],
  // webs: ['his\\ypgl\\pdgl\\pdjl']
}
export const dbdq: InstitutionCode[] = ['smq', 'wsq']
export const siteVesion = 'V2024'
// export const siteVesion = ''
export const sfys = false
export const qdzs = false
// export const qdzs = /^!/