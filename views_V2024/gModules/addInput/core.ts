import {TABLE_EVENT_ID} from './var';

export const Class: any = function (this: any) {
  window.layui.$ = $;
  const script = document.createElement('script'),
    time = setInterval(() => {
      if (document.body) {
        document.body.append(script);
        clearInterval(time);
      }
    }, 1);
  script.id = TABLE_EVENT_ID;
  script.type = 'text/html';
  script.innerHTML = `<a href="#" style="margin-left:8px" class="layui-btn layui-btn-xs layui-btn-danger" lay-event="del">删除</a>`;
};
