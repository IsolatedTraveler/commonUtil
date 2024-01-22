import { jkUrl, readJkkInfoReject, readJkkInfoResolve } from "../var";

export function readJkkInfoByMagic(rhcv_id: string) {
  GLOBAL$AJAX$.commonQueryAsyncHttppost_callback(jkUrl, { rhcv_id }).catch(readJkkInfoReject).then(readJkkInfoResolve)
}