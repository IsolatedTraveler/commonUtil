# 打包说明
1. 可通过修改global/ajax/var/ajax中的部分参数更改ajax配置信息，具体配置如下：

|参数名|说明|
|:-----  |-----                           |
|jqMode|设置不同的鉴权模式，现仅支持magic:header鉴权（该参数修改后，应在主程序同步提供鉴权方案）|
|contentType|设置ajax:post提交数据方式(该参数修改后须同步修改主程序中的dealAjaxData)|

# 开发模块说明
```mermaid
graph LR

A((模块说明))
B((全局模块))
C((主功能模块))
D((主功能依赖模块))
E((依赖于layui的模块))
A-->B
A-->C
A-->D
A-->E
```