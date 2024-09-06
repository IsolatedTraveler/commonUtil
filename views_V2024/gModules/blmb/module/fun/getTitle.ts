import {pageHeadStyle} from '../var';

export function getTitle(nr: string): string {
  switch (pageHeadStyle) {
    case '0':
      return `<div class="print-head-0">
        <div style="display:none" data-type="html" data-name="id"></div>
        <div style="display:none" data-type="html" data-name="spzdxx"></div>
        <div style="display:none" data-type="html" data-name="hzxb"></div>
        <p class="print-head-title" data-type="html" data-name="cfbt">${nr}</p>
        <div class="print-head-info jt-flex-r">
          <p><span>姓名：</span><span data-type="html" data-name="hzxm"></span></p>
          <p><span>性别：</span><span data-type="html" data-name="hzxb_mc"></span></p>
          <p><span>年龄：</span><span data-type="html" data-name="hznl"></span></p>
          <p class="print-min-w25-i"><span>诊断：</span><span data-type="html" data-name="mzzdxx"></span></p>
        </div>
      </div>`;
    default:
      return `未设置该类型【${pageHeadStyle}】顶部样式`;
  }
}
