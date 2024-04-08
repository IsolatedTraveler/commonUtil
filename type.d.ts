declare module 'rollup-plugin-typescript';
interface DateConstructor {
  new(...args: any[]): Date;
  prototype: Date;
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
declare global {
  interface Date extends DateConstructor { }
}