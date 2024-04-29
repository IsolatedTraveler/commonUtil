import { SUCCESS_CODE } from "../var";

export function resFormat<T>(data: T): { code: number, data: T } {
  return { code: SUCCESS_CODE, data }
}