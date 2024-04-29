import { addSkipParam, judgePd } from "../fun";

export function addInventoryRecord() {
  return judgePd().then((res) => {
    const row: any = {}, msg = '盘点期间该库房【${bmmc}】将不能进行发药操作，是否要进行盘点？';
    (w as any).pdgl.judgeIsOpenUrl(msg, 1, addSkipParam(row, res), '药品盘点编辑')
  })
}