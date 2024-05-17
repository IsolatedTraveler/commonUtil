import { alertMsg, confirmMsg } from "../../common";

/**
 * @description 打开消息提示框或确认对话框，根据类型自动选择合适的提示方式。
 *
 * 此函数提供了灵活的消息展示逻辑，根据传入的`type`参数决定是显示简单的提示信息还是带有不同按钮的确认对话框。
 * 支持自定义按钮配置，同时也预设了几种常见的按钮排列组合。
 *
 * @param {string} title - 弹窗的标题。
 * @param {string} msg - 要展示的消息内容。
 * @param {string} type - 消息类型，决定弹窗的行为模式：
 *   - `'0'`: 直接显示警告信息，不等待用户交互，返回已解决的Promise。
 *   - 其他数字: 显示带按钮的确认对话框，按钮配置依据数字对应预设或自定义。
 * @param {string[]} [button] - 自定义按钮数组，如果不提供且`type`不是`'0'`，则使用预设按钮。
 * @returns {Promise<any>} - 如果弹出的是确认对话框，根据用户点击按钮的结果返回Promise。
 */
export function openMsgBox(title: string, msg: string, type: string, button?: string[]) {
  if (type == '0') {
    alertMsg(msg, title)
    return Promise.resolve()
  }
  if (!button) {
    switch (type) {
      case '1':
        button = ['确定', '取消']
        break;
      case '2':
        button = ['中止', '重试', '忽略']
        break;
      case '3':
        button = ['是', '否', '取消']
        break;
      case '4':
        button = ['是', '否']
        break;
      case '5':
        button = ['重试', '取消']
        break;
      default:
        button = ['确定', '取消']
        break;
    }
  }
  return confirmMsg(msg, button, title)
}