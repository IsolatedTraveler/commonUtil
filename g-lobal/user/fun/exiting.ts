


export function exiting(a: Window | null) {
  a = a || w
  a.location.href = 'about:blank'
  a.opener = null
  a.open('', '_self')
  a.close()
}