export function toDecimalNumber(num: any, precision: any) {
  try {
    if (num == '') {
      num = '0';
      //return '0';
    }
    if (precision) {
      precision = parseInt(precision, 10);
      let f = parseFloat(num);
      if (!isNaN(f)) {
        if (precision > 0) {
          return f.toFixed(precision);
        } else {
          return num;
        }
      }
    } else {
      let f = parseFloat(num);
      if (!isNaN(f)) {
        return num;
      } else {
        return num;
      }
    }
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}