import { setClodop } from "../var";

export function getPrint() {
  return setClodop().then(res => {
    let len = res.GET_PRINTER_COUNT(), arr = [];
    for (let i = 0; i < len; i++) {
      let mc = res.GET_PRINTER_NAME(i);
      arr.push({ id: mc, mc });
    }
    return arr;
  })
}