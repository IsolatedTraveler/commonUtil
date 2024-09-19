import { getUser } from "../../../../g-lobal"
import { DzpjKpJgConfig, DzpjKpJgParam } from "../../type"
import { dzpjKpConfig, setDzpjKpIsPrint, setDzpjKpSync } from "../var"
import { setDzpjConfig } from "./setDzpjConfig"
import { setKpJgConfig } from "./setKpJgConfig"
/**
 * 判断是否开启发票功能
 *
 * @function isOpenFp
 * @returns {Promise<DzpjKpJgConfig>} 返回一个Promise，解析后的结果是DzpjKpJgConfig类型的对象，表示开票配置信息。
 *
 * 此函数首先获取用户信息中的jgid，然后检查`dzpjKpConfig`对象中是否已有该jgid对应的配置信息。如果没有，将异步获取开票组配置和动态配置，并将这两个Promise组合为一个Promise.all调用。一旦配置信息获取完毕，它会更新动态配置的同步和打印策略，最后返回开票组配置信息。
 *
 * 注意：此函数使用Promise.all处理多个异步操作，确保所有必要的配置信息都被获取后再返回结果。这确保了在进一步处理前，所有配置信息都已准备就绪。
 */
export function isOpenFp(printParam: any) {
  // 获取开票参数信息，判断是否开票
  const {jgid} = getUser();
  if (!dzpjKpConfig[jgid]) {
    dzpjKpConfig[jgid] = Promise.all([setKpJgConfig(jgid), setDzpjConfig(jgid)]);
  }
  return (dzpjKpConfig[jgid] as Promise<[DzpjKpJgConfig, DzpjKpJgParam]>).then(
    res => {
      setDzpjKpSync(res[1].sync);
      setDzpjKpIsPrint(res[1].isPrint);
      printParam.printer = res[1].print || ""
      return res[0];
    },
    res => {
      dzpjKpConfig[jgid] = undefined;
      return Promise.reject(res);
    }
  );
}