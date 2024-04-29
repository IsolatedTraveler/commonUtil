// global.d.ts 或 custom_typings.d.ts
declare var jtUtil: any; // 或具体类型
declare global {
  interface Window {
    jtUtil: any; // 或者具体的类型声明，如果知道jtUtil的具体类型
  }
}
export { }