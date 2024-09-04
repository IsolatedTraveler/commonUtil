export function dealUrl(o: string, path: string) {
  if (path.endsWith('/')) {
    return o + path;
  } else if (/\.[^/]+$/.test(path)) {
    return o + path;
  } else {
    return o + path + '/';
  }
}
