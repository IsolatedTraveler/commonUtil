import { colSelectKey, colSelectVal, dataObj, inputFile } from "../var/index";

export function trigger() {
  inputFile.click()
  setTimeout(() => {
    console.log(dataObj, colSelectKey, colSelectVal)
  }, 5000);
}