import { getInputElems, getTrElemLast } from "./getElem"
import { scroll } from "./scroll"

export function fixedPosition(i) {
  return new Promise((resolve, reject) => {
    let tr = getTrElemLast(i), elem=getInputElems(tr)[0]
    setTimeout(() => {
      if (elem && elem.tagName === 'TD') {
        elem = $(elem).find('input')[0]
      }
      if (elem) {
        elem.focus()
      }
      resolve()
      scroll(i)
    }, 0)
  })
}