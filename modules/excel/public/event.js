import { dataObj, inputFile, tableSelectKey, tableSelectVal } from "../var/index";

export function trigger() {
  inputFile.click()
  setTimeout(() => {
    console.log(dataObj, tableSelectKey, tableSelectVal)
  }, 5000);
}