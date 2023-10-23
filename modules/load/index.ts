import { LoadConfig } from "./type/config"

export class Load {
  v: string
  constructor() {
    this.v = '1.0.1'
  }
  render(config: LoadConfig) {
    new Render(config)
  }
}