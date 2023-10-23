import { EInvoiceConfig } from "./type/config"

export class EInvoice {
  v: string
  constructor() {
    this.v = '1.0.1'
  }
  render(config: EInvoiceConfig) {
    new Render(config)
  }
}