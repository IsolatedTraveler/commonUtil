export function getAjaxRes(res) {
  try {
    return JSON.parse(res)
  } catch (e) {
    return res
  }
}