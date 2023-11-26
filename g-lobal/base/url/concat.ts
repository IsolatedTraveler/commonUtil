export function dealsUrl(url = '', base) {
  if (!/^http[s]*:\/\//.test(url)) {
    base = base ? new URL(base) : location;
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