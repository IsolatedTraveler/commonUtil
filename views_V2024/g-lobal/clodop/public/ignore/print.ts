import { ClodopPrintParam } from "../../../type";
import { setClodop } from "../../var";

export function print(obj: ClodopPrintParam = {} as any) {
  return setClodop().then((res) => {
    res.PRINT_INIT(obj.title || '打印');
    obj.defPrint && res.SET_PRINTER_INDEX(obj.defPrint || obj.mrdyj);
    obj.size && res.SET_PRINT_PAGESIZE(...obj.size);
    obj = Object.assign({ bj1: 8, bj2: 8 }, obj);
    res.ADD_PRINT_HTM(obj.bj1, obj.bj2, '100%', "100%", obj.val);
    if (obj.mode) {
      obj.mode.forEach((it: any) => {
        res.SET_PRINT_MODE(...it);
      });
    }
    if (obj.dyms === '3') {
      res.PREVIEW();
    } else if (obj.dyms === '2') {
      let a = (obj.w || window);
      a.layui.layer.confirm(obj.msg || '是否打印？', function (index: number) {
        window.layui.layer.close(index)
        res.PRINT();
      });
    } else {
      res.PRINT();
    }
  })
}