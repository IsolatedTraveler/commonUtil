import { AjaxASync } from "./ajax"
import { getUploadUrl } from "./url"

export function upload(data, name, lx = 'url', option = {}) {
  let formData = new FormData()
  if (lx === 'url') {
    let a = data.split(','), type = a[0].match(/:(.*?);/)[1], bytes = window.atob(a[1]), ia = new Uint8Array(bytes.length)
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i)
    }
    formData.append('file', new Blob([ia], {type: type}), name + '.' + type.split('/')[1])
  } else {
    formData.append('file', data)
  }
  return AjaxASync(option.url || getUploadUrl(), formData, {}, {}, {contentType: false, processData: false}, 'POST')
}
export default {
  upload
}