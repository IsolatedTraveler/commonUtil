export interface MagicData {
  url: string
  Authorization?: string
  user: any
  isParam?: boolean
  AuthorizationName: string
}
export const ajaxTimeOut = 1000 * 60 * 3, ajaxJqMagic: MagicData = {
  url: '/magicJq/oauth/token',
  isParam: true,
  AuthorizationName: 'Authorization',
  Authorization: 'Basic MDAwMDAwOmp0d3hAMjAyMw==',
  user: {
    username: "admin",
    password: "9e6a933026b133a962a5d217d849f65c"
  }
},
  ajaxJqMagicV2: MagicData = {
    url: '/magic/oauth/login',
    AuthorizationName: 'accessToken',
    user: {
      zh: '',
      mm: ''
    }
  }