export function error(res: ErdssHlyyReturn) {
  if (res.code != 200) {
    window.YytPass.layer(res.msg)
  }
}