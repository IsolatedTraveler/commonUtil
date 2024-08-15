export const FIXED = 'z-fixed'
  , STYLE = `
  .z-fixed{
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .z-fixed>div{
    padding:8px;
    box-sizing:border-box;
    box-shadow:1px 1px 50px rgba(0,0,0,.3);
    border-radius: 5px;
    background:#fff;
    max-height: 90%;
  }
  .z-fixed .layui-form{
    display:flex;
    flex-wrap:wrap;
  }
  .z-fixed .layui-form .layui-form-item{
    width:calc(33.33333333333333% - 8px);
    display:flex;
    margin-bottom:8px
  }
  .z-fixed .layui-form .layui-form-item .layui-input-line{
    flex:auto;
  }
  .z-fixed .z-bot{
    width:100%;
    margin-top: 8px;
    display:flex;
    justify-content: flex-end;
  }
  `
