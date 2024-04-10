
interface UploadInputFileRes {
  code: SelfResCode
  files: any
}
export function uploadInputFile(
  input: HTMLInputElement): Promise<UploadInputFileRes> {
  return new Promise((resolve, reject) => {
    // 用于校验两次录入数据是否相同
    let old = input.value
    input.onchange = function (this: any) {
      resolve({ code: old === this.value ? -1 : 1, files: this.files })
    }
    setTimeout(() => {
      input.value = ''
      input.click()
    }, 0);
  })
}