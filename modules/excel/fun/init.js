import { getInputFile, reload } from "./child/index";

export function init(config) {
  getInputFile()
  reload(config)
}
