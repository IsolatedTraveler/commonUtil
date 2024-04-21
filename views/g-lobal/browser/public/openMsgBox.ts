import { alertMsg, confirmMsg } from "../../layer";

export function openMsgBox(title: string, msg: string, button: any, type: any) {
  if (type == '0') {
    alertMsg(msg, title)
    return Promise.resolve()
  } else if (!button) {
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