export class Clodop {
  name = ''
  key = ''
  constructor() {
  }
  SET_LICENSES(n: string, k: string, _c: string, _d: string) {
    this.name = n
    this.key = k
    return this
  }
}