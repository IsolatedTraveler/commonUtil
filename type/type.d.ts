declare var that: any
declare interface Window {
  layer: any
  layui: any
  MODULENAME: any
  jthisJsObject: any
}
declare interface JQueryStatic {
  messager: {
    alert:(data:any)=>JQueryStatic
  };
}