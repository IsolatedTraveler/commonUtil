import { setAppBaseUrl } from "../views_V2024/g-lobal/main";

export function setLoaction(href?: string) {
  href = href || 'http://127.0.0.1:8020/his-flie/sc/webs/index.html'
  // 重置所有可能影响后续测试的模拟
  jest.restoreAllMocks();
  jest.resetAllMocks();
  // 确保location.href在每个测试开始前都被重置
  Object.defineProperty(window, 'location', {
    value: new URL(href), // 或者设置一个默认值，如果需要的话
    writable: true
  });
  setAppBaseUrl()
}