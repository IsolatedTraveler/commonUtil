export function getArr(str: string | string[]): string[] {
  if (typeof str === 'string') {
    try {
      return JSON.parse(str);
    } catch (e) {
      return [];
    }
  }
  return str || [];
}
