import { dealsUrl } from "../../url";

export function skip(url: string) {
  url = dealsUrl('./ypcgThird.html')
  window.open(url, url);
}