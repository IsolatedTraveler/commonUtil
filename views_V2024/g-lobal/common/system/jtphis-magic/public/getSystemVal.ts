import {alertMsg} from '../../../pop';
import {SYSTEM} from '../var';
/**
 * @function getSystemVal
 * 获取系统自定义方法的值或执行系统自定义方法。
 *
 * @param {string} name - 系统方法的名称。
 * @param {Array<any> | undefined} [param=undefined] - 方法的参数列表，默认为undefined。
 *
 * 如果当前环境存在且已定义`SYSTEM`对象及其中的`name`方法：
 *   - 如果提供了`param`参数，则调用`SYSTEM[name]`方法并传入`param`参数。
 *   - 如果没有提供`param`参数，则仅调用`SYSTEM[name]`方法。
 *
 * 如果`SYSTEM`对象不存在或`name`方法未定义：
 *   - 将显示警告消息，提示用户联系技术支持或说明该方法依赖于专用浏览器。
 */
export function getSystemVal(name: string, param: Array<any> | undefined = undefined) {
  if (SYSTEM) {
    if (SYSTEM[name]) {
      if (param) {
        return SYSTEM[name](...param);
      } else {
        return SYSTEM[name]();
      }
    } else {
      alertMsg(`当前浏览器未定义该方法（${name}），请联系厂家提供技术支持`);
    }
  } else {
    // 报错
    alertMsg('该方法依赖专有浏览器，请在专有浏览器中使用', name);
  }
}
