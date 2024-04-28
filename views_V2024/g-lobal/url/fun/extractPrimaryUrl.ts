// 从数组中提取主URL
export function extractPrimaryUrl(urlsArray: string | string[]) {
  if (typeof urlsArray === 'string') return urlsArray;
  for (var index = 0; index < urlsArray.length; index++) {
    if (urlsArray[index].includes(location.origin)) {
      return urlsArray[index];
    }
  }
  return urlsArray[0];
}