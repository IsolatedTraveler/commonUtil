import { ajaxSync } from "../fun/async"
import { AjaxRequestOption } from "../type"
import { getUploadUrl } from "../../url/public/commonUtil"
export function upload(data: any, name: string, lx = 'url', option: AjaxRequestOption = {}) {
  let formData = new FormData()
  if (lx === 'url') {
    let a = data.split(','), type = a[0].match(/:(.*?);/)[1], bytes = window.atob(a[1]), ia = new Uint8Array(bytes.length)
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i)
    }
    formData.append('file', new Blob([ia], { type: type }), name)
  } else {
    formData.append('file', data)
  }
  return ajaxSync(option.url || getUploadUrl(), formData, {}, { isNotGetUser: true }, { contentType: false, processData: false }, 'POST')
}