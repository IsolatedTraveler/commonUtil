import { setPageTemp } from "../../util";
import { setUser, user } from "../var";
/**
 * @description 获取用户信息。如果尚未设置，此函数会触发应用程序用户信息的初始化过程。
 *
 * @returns {any}
 */
export function getUser(): any {
  return setPageTemp(user, setUser)
}