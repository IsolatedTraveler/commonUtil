export function dealNull(data: any) {
  const keys = Object.keys(data)
  keys.forEach(key => {
    if (data[key] === 'null' || data[key] === null) {
      data[key] = ''
    }
  })
}