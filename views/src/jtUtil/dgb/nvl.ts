export function nvl(data: any, mrz: any) {
  if (!data || data == 'null' || data == null) {
    if (mrz) {
      return mrz;
    } else {
      return '';
    }
  } else {
    return data;
  }
}