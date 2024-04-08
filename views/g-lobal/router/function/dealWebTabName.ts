import { session } from "../../temp";

export function dealWebTabName(name: string, clear: boolean = false) {
  let tabName;
  if (clear) {
    tabName = [name];
    w.name = name;
  } else {
    tabName = session('webTabName') || [];
    tabName = tabName.filter(it => {
      return it !== name
    });
    tabName.push(name);
  }
  session('webTabName', tabName);
}