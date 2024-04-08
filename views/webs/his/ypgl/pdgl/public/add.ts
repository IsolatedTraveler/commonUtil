import { judgePd } from "../fun";

export function addInventoryRecord() {
  return judgePd().then(({ pdlx, pdsj, pxgz, pylx, ksid }) => {
    const row = {}, msg = '盘点期间该库房【${bmmc}】将不能进行发药操作，是否要进行盘点？',
      url = 'pdgl/pdgl_edit.html'
    w.commonUtil.setVar("010603", "pddxx", JSON.stringify(row));
    w.commonUtil.setVar("010603", "czlx", "add");
    w.commonUtil.setVar("010603", "pdsj", pdsj);
    w.commonUtil.setVar("010603", "pdkf", ksid);
    w.commonUtil.setVar("010603", "gljgid", $("#gljgid").combobox("getValue"));
    w.commonUtil.setVar("010603", "gljgmc", $("#gljgid").combobox("getText"));
    w.commonUtil.setVar("010603", "ksid", ksid);
    w.commonUtil.setVar("010603", "pdlx", pdlx);
    w.commonUtil.setVar("010603", "pylx", pylx);
    w.commonUtil.setVar("010603", "pxgz", pxgz);
    (w as any).pdgl.judgeIsOpenUrl(msg, 1, url, 'yppdbj')
  })
}