import { judgeConfig } from "../../../../../views_V2024/g-lobal/main";
describe('judgeConfig function', () => {
  it('正常情况，len不等于j，应解析Promise', () => {
    return new Promise((resolve, reject) => {
      judgeConfig(1001, 5, 10, (val: number) => {
        try {
          expect(val).toBe(5); // 确认j的值正确传递
          resolve(false);
        } catch (e) {
          reject(e);
        }
      }, reject);
    });
  });
  it('失败情况，len等于j，应拒绝Promise', () => {
    (window as any).layer = { close: (i: number) => i }
    return new Promise((resolveTest, rejectTest) => {
      judgeConfig(1001, 10, 10, resolveTest, (err: any) => {
        try {
          expect(err).toBeUndefined(); // 或者检查特定的错误处理逻辑
          resolveTest(false);
        } catch (e) {
          rejectTest(e);
        }
      });
    });
  });
})