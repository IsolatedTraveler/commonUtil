import { dbzf } from "../../var/gdcs";

export function calcDbxx(zf, bxzf) {
  return { dbcs: Math.floor(zf / dbzf), sydbjf: zf % dbzf, bxzf, zf }
}