import { jse } from "../../var/init"
export function loadPwdJs() {
  return that.use([
    { src: './encryption/sha256.js' },
    { src: './encryption/jsencrypt.min.js' }
  ]).then(e => {
    jse = new JSEncrypt()
    jse.setPublicKey('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh4Mzt/QVu7hw0cIZTzdNQRuXoD/+FZyv2Iby0syLYdq7/OQnMM4SQxtk8FFnEyuv6RkIYO4BcyP+Ut6GXtNDI9NGBDKY27MK91z/gTswDWC6fKyp8tGL6oQLxsI3aB05Yvl3D5VYc43mmbl4R6ITRhaYkXO5HAspFPi4au9cA/BycWieul3h9FeQzwDMO0xouHow5OVeTVfb5cEUV1B+BYDWTCS5MtYMjZftrW+Raum5yn/RFNL7Wy6v210gyav8UhFNwN08sfZZhjCvumnw3uKztIjAoU4OIWxI0IUwF+wDfjkMv81yh98V74mVziHWP2gg+IH9QC/jC/jMdUPYXQIDAQAB')
  })
}
export default {
  loadPwdJs
}