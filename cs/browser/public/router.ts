export function router(pid: string, id: string, title: string, url: string, data: any) {
  if (data && url) {
    url = that.getParamsUrl(data, that.dealsUrl(url, that.getHostUrl()));
  } else if (url) {
    url = that.dealsUrl(url, that.getHostUrl());
  }
  let res = JSON.parse(
    getSystemVal("openHisSystem", [pid, id === pid ? "" : id, url])
  );
  if (res.code !== "1") {
    w.location.href = that.dealsUrl(url, that.getHostUrl());
  }
}