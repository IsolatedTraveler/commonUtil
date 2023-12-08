import { session } from "../../temp";
import { dealsUrl, getBaseUrl } from "../../url";
import { exiting } from "../fun/exiting";
import { loginUrl } from "../var";
export function exited() {
  let data = session('webTabName') || [], url = dealsUrl(loginUrl, getBaseUrl()), name = w.name;
  if (data.length) {
    data.filter((it: string) => it != name).map((it: string | undefined) => {
      return exiting(w.open('', it, ''))
    })
  }
  if (location.href != url) {
    sessionStorage.clear();
    location.href = url;
  }
}