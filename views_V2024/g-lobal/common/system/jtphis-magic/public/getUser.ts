import { setPageTemp } from "../../../../util/public/setPageTemp";
import { setUser, user } from "../var/var";
/**
 * @description 获取用户信息。如果尚未设置，此函数会触发应用程序用户信息的初始化过程。
 *
 * @returns {any}
 */
export function getUser(): any {
  return setPageTemp(user, setUser)
}