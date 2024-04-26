// 校验当前库房是否可以盘点
export function validateWarehouse(bmid: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if ((w as any).pdgl.checkSFPD(bmid, '该药房/库有未划价/未发药/未审核的移库单据，不能新增盘点数据！')) {
      reject()
    } else {
      resolve(bmid)
    }
  })
}