import { commonUtilName } from "../var";

export function redirect(a, pid, id, title, url, data) {
  setTimeout(() => {
    if (a && a[commonUtilName]) {
      a[commonUtilName].router(pid, id, title, url, data);
    } else {
      redirect(a, pid, id, title, url, data);
    }
  }, 100);
}