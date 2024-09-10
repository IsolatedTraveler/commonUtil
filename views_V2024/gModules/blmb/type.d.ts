declare module 'GMBlmb' {
  export interface BlmbConfig {
    id: string; // 处方模板id
    cfbt: BlmbTitle; // 处方标题
    mbjcxxys: string; // 模板开头展示样式，默认0
    mbjwxxys: string; // 模板结尾展示样式，默认0
    mbztsl: string; // 模板字体样式（特指段落文字一行显示中文字体数量）
    mbztys: string; // 模板主体样式（纸张内边距）
    mbdyzz: string; // 纸张大小
    elem: string; // 父元素
    disabled: boolean;
    isEdit: boolean;
    cols: BlmbMxCol[];
    footCols?: BlmbMxCol[];
  }
  // 内容显示 类型
  // 1  段落         nr 为段落内容           ys 为段落打印样式
  // 2  标题         nr 为标题内容           ys 为标题打印样式
  // 3  结尾提示     nr 为结尾提示内容       ys 为标题打印样式      bt   为标题渲染方法   类似lx字段的功能
  // 4  翻页
  // 5  图片         nr 图片内容
  // 11 多选         nr 为多选值             ys 为多选打印展示样式
  // 12 单选         nr 为单选值             ys 为单选打印展示样式
  // 13 自由录入     nr 为自由录入可录入行   ys 为自由录入打印展示样式
  export interface BlmbMxCol {
    bt?: string; // 标题
    id: string; // 唯一id
    lx: string; // 类型
    mbid: string; // 模板id
    nr: any; // 内容
    sffy?: string; // 是否在同一页   0   在同一页  1 标题和内容不在同一页   2   表题不在同一页     3  内容不在同一页
    ys?: string;
  }
  export const config: BlmbConfig;
  export {buildAbsoluteUrl, BLMB_PAGE_WRAP, BLMB_TYPE, BLMB_SELECTED, BLMB_TYPE_CLASS, BLMB_LX} from './index';
}
