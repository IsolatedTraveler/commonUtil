import { InstitutionCode } from "./build/var/config"
interface Dbnr {
  [key: string]: string[]
}
export const dbnr: Dbnr = {
  // cs: ['gncs'],
  // gModules: ['hisAjax'],
  // layModules: [],
  src: ['jtUtil', 'math'],
  // third: ['hlyy'],
  // webs: ['his\\ypgl\\pdgl\\pdjl']
}
export const dbdq: InstitutionCode[] = ['smq']
export const siteVesion = 'V2024'
// export const siteVesion = ''
export const sfys = false
export const qdzs = false
// export const qdzs = /^!/