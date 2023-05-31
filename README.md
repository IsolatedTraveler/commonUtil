# 打包说明
1. 可通过修改global/ajax/var/ajax中的部分参数更改ajax配置信息，具体配置如下：

|参数名|说明|
|:-----  |-----                           |
|jqMode|设置不同的鉴权模式，现仅支持magic:header鉴权（该参数修改后，应在主程序同步提供鉴权方案）|
|contentType|设置ajax:post提交数据方式(该参数修改后须同步修改主程序中的dealAjaxData)|

# 开发模块说明
```mermaid
graph LR

A("模块说明")
AA("全局模块【global】")
AB("主功能模块【src】")
AC("主功能依赖模块【modules】")
AD("依赖layui模块【layModules】")
AAA("$.ajax")
AAB("Date扩展")
AAC("String扩展")
AAD("uuid")
AAE("url处理")
AAF("页面临时数据判断")
A-->AA
A-->AB
A-->AC
A-->AD
AA-->AAA
AA-->AAB
AA-->AAC
AA-->AAD
AA-->AAE
AA-->AAF
```