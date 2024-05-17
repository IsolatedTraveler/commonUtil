export function setXhrKeyVal(xhr: XMLHttpRequest, method: keyof XMLHttpRequest, data: any) {
  if (!data) return
  for (var key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      xhr[method](key, data[key]);
    }
  }
}