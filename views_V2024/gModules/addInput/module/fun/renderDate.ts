import { TableColDate } from "GMAddInput";

export function renderDate({ field }: TableColDate, i: number) {
  return `<input type="text" class="layui-input" name="${field}" layDate data-id="${i}">`
}