export interface MagicData {
  url: string
  Authorization?: string
  user: any
  wjqCode: number
  isParam?: boolean
  AuthorizationName: string
}
export const ajaxTimeOut = 1000 * 60 * 3, ajaxJqMagic: MagicData = {
  url: '/magicJq/oauth/token',
  isParam: true,
  wjqCode: 2,
  AuthorizationName: 'Authorization',
  Authorization: 'Basic MDAwMDAwOmp0d3hAMjAyMw==',
  user: {
    username: "admin",
    password: "9e6a933026b133a962a5d217d849f65c"
  }
},
  ajaxJqMagicV2: MagicData = {
    url: '/magic/oauth/login',
    wjqCode: 101,
    AuthorizationName: 'accessToken',
    user: {
      zh: '',
      mm: ''
    }
  }