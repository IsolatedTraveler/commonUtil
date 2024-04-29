export interface XhrRes {
  code: 1 | number
  message: string
  data: {
    list: any[]
    total: number
  }
}