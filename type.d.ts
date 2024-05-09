declare module 'rollup-plugin-typescript';
interface DateConstructor {
  new(...args: any[]): Date;
}
interface Date {
  format(fmt?: string): string;
  addDay(num?: string | number): Date;
  addHour(num?: string | number): Date;
  addMinute(num: string | number): Date;
  addSeconds(num: number): Date;
  getMonthDays(): number;
  getYearDay(): number;
  addMonth(num?: string | number): Date;
  addYear(num?: string | number): Date;
  getWeek(num?: string | number): Date;
  getMonthDay(num?: string | number): Date;
  getSeason(num?: string | number): Date;
}
interface String {
  dateFormat(fmt?: string): string;
  toDate(fmt: string, fmt1?: string): Date | string;
}
// 1 代表成功   -1 代表失败
type SelfResCode = -1 | 1
declare const jQuery: any;
declare const $: any;
declare const layer: any;
declare const layui: any;
declare var that: any;
declare const w: any;