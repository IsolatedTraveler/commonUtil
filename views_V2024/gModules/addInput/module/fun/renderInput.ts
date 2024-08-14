import { TableCol } from "GMAddInput";

export function renderInput({ placeholder = '', field }: TableCol, _i: number) {
  return `<input type="text" name="${field}" placeholder="${placeholder}" autocomplete="off" class="layui-input">`
}