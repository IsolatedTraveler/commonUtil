export function dealsUrl(url = '', base: string | URL | Location | undefined = undefined) {
  if (!/^http[s]*:\/\//.test(url)) {
    base = getUrl(base)
    let path = base.pathname.split('/');
    if (/^\.\//.test(url)) {
      path.pop();
      path.push(url.replace('./', ''));
    } else if (/^..\//.test(url)) {
      let v = url.split('/'), len = v.filter(it => it === '..').length;
      path.splice(-(len + 1));
      path.push(...v.splice(len));
    } else {
      path.push(url.replace(/^\/|\/$/g, ''));
    }
    return base.origin + '/' + path.filter(it => it).join('/')
  }
  return url
}
export function getUrl(url: string | URL | Location | undefined) {
  if (url) {
    if (typeof url === 'string') {
      url = new URL(url)
    }
  } else {
    url = location
  }
  return url
}