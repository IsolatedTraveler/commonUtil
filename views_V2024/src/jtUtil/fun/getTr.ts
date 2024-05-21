import { getTBody } from "./getTBody";

export function getTr(elem: JQuery, i: number, body: JQuery = getTBody(elem)): JQuery {
  return body.find('tr[data-index="' + i + '"]')
}