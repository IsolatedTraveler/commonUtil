import { getParamsUrl } from "../base";
import { getSystemVal } from "./base/getSystem";

export function bbPrint(reportid: string, obj: any, printCs: any) {
  let param = getParamsUrl(obj),
    data = JSON.stringify(
      Object.assign(
        {
          reportid,
          param,
          preview: "0",
          printer: "",
          left: "",
          top: "",
          styleid: "",
        },
        printCs
      )
    );
  getSystemVal('printreport', [data])
}