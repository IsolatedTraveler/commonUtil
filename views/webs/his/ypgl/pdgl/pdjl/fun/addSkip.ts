import { PdtjResolve } from "../var";

export function addSkipParam(row: any, { pdlx, pdsj, pxgz, pylx, ksid }: PdtjResolve, czlx: string = 'add') {
  const url = 'pdgl/pdgl_edit.html'
  w.commonUtil.setVar("010603", "pddxx", JSON.stringify(row));
  w.commonUtil.setVar("010603", "czlx", czlx);
  w.commonUtil.setVar("010603", "pdsj", pdsj);
  w.commonUtil.setVar("010603", "pdkf", ksid);
  w.commonUtil.setVar("010603", "gljgid", $("#gljgid").combobox("getValue"));
  w.commonUtil.setVar("010603", "gljgmc", $("#gljgid").combobox("getText"));
  w.commonUtil.setVar("010603", "ksid", ksid);
  w.commonUtil.setVar("010603", "pdlx", pdlx);
  w.commonUtil.setVar("010603", "pylx", pylx);
  w.commonUtil.setVar("010603", "pxgz", pxgz);
  return url
}
