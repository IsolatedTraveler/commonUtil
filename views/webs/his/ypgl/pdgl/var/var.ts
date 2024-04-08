export interface JkkInfo {

}
type Resolve = (value: any) => void
type Reject = (reason?: any) => void
export var readJkkInfoResolve: Resolve, readJkkInfoReject: Reject
export function setJkkInfoPromise(resolve: Resolve, reject: Reject) {
  readJkkInfoResolve = resolve
  readJkkInfoReject = reject
}