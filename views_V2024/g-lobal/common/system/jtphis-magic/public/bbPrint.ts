import { convertObjectToQueryString } from "../../../../url";
import { getSystemVal } from "./getSystemVal";

export function bbPrint(reportid: string, obj: any, printCs: any = {}) {
  let param = convertObjectToQueryString(obj),
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