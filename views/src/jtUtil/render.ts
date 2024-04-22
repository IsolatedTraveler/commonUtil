
import {
  ajaxErrorCode, ajaxSuccessCode, setAjaxContentType, setAjaxSuccessCode, setJqMode, getAjax, getAjaxSync,
  commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload, dealAjaxData, ajax, getAjaxRes,
  getJtPhisSystem, getSystemVal, bbPrint, getBrowserParam, setBrowserParam, errorTrace, skip, dealLogin,
  paramget, setWebName, getMd5, encryption, down, loadJs, loadJsJudge, loadStyle, readFile, uploadInputFile,
  alertMsg, confirmMsg, getLayui, load, loaded, loading, openPage, getName, getRouterW, redirect, router, session,
  local, setPageTemp, tempData, getAllUrl, getUploadUrl, dealsUrl, getUrl, getObjToUrl, getParamsUrl,
  getUrlParams, getBaseUrl, getMainUrl, getServiceUrl, strToUrl, dealMenu, exited, getMenu, getUser,
  getUserInfo, login, exit, logOut, debounce1, formatTreeData, uuid, prefix, getAge, dealSheetToArray, expExcel,
  loadXlsx, readXlsx, openDialog, openMsgBox
} from '../../g-lobal'
const Class = function () {
  that = this;
  getJtPhisSystem();
  setWebName();
  if (layui) {
    layui.use(['layer']);
  }
};
function loadComboGrigPageData(gridObject, url, params) {
  try {
    if (params.pageNumber) {
      var pager = $(gridObject).combogrid("grid").datagrid('getPager'); // get the pager of datagrid
      if (params.pageNumber != pager.pageNumber) {
        pager.pagination({
          pageNumber: params.pageNumber
        });
      }
    }
    var q = params.dm;
    if (q != '' || params.blanksearch || params.key || params.jsm) {
      var resData = commonHttppost(url, params).data;
      if (resData.total > 0) {
        $(gridObject).combogrid('setValue', q);
        $(gridObject).combogrid('grid').datagrid('loadData', resData);
        $(gridObject).combogrid("showPanel");
        $(gridObject).combogrid('grid').datagrid("highlightRow", 0);
        //alert("showPanel");
      }
      else {
        $(gridObject).combogrid('grid').datagrid('loadData', []);
      }
    }
  }
  catch (e) {
    errorTrace(e);
  }
}
function comboGridPageChange(gridObject, url, q, param) {
  try {
    var pager = $(gridObject).combogrid('grid').datagrid('getPager');
    $(pager).pagination({
      displayMsg: '',
      onBeforeRefresh: function () {
      },
      onRefresh: function (pageNumber, pageSize) {
        try {
          if (q != '' || param.blanksearch) {
            param.dm = q;
            param.pageNumber = pageNumber;
            param.pageSizeize = pageSize;
            loadComboGrigPageData(gridObject, url, param);
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onChangePageSize: function (pageSize) {
        try {
          if (q != '' || param.blanksearch) {
            param.dm = q;
            param.pageNumber = 1;
            param.pageSize = pageSize;
            $(gridObject).combogrid('grid').datagrid("options").pageSize = pageSize;
            loadComboGrigPageData(gridObject, url, param);
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onSelectPage: function (pageNumber, pageSize) {
        try {
          if (q != '' || param.blanksearch) {
            param.dm = q;
            param.pageNumber = pageNumber;
            param.pageSize = pageSize;
            loadComboGrigPageData(gridObject, url, param);
          }
        }
        catch (e) {
          errorTrace(e);
        }
      }
    });
  }
  catch (e) {
    errorTrace(e);
  }
}
function loadDataGrigPageData(gridObject, url, params) {
  try {
    if (params.pageNumber) {
      var pager = $(gridObject).datagrid('getPager'); // get the pager of datagrid
      if (params.pageNumber != pager.pageNumber) {
        pager.pagination({
          pageNumber: params.pageNumber
        });
      }
    }
    $(gridObject).datagrid("loading");
    var resData = commonHttppost(url, params).data.list;
    $(gridObject).datagrid('loadData', resData);
    setTimeout(function () {
      $(gridObject).datagrid("loaded");
    }, 200);
    return resData;
  }
  catch (e) {
    errorTrace(e);
  }
}
function dataGridPageChange(gridObject, url, param) {
  try {
    var pager = $(gridObject).datagrid('getPager');
    $(pager).pagination({
      displayMsg: param.msg == ' ' ? param.msg : undefined,
      onBeforeRefresh: function () {
      },
      onRefresh: function (pageNumber, pageSize) {
        try {
          param.pageNumber = pageNumber;
          param.pageSize = pageSize;
          loadDataGrigPageData(gridObject, url, param);
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onChangePageSize: function (pageSize) {
        try {
          param.pageNumber = 1;
          param.size = pageSize;
          $(gridObject).datagrid('options').pageSize = pageSize;
          loadDataGrigPageData(gridObject, url, param);
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onSelectPage: function (pageNumber, pageSize) {
        try {
          param.pageNumber = pageNumber;
          param.size = pageSize;
          loadDataGrigPageData(gridObject, url, param);
        }
        catch (e) {
          errorTrace(e);
        }
      }
    });
  }
  catch (e) {
    errorTrace(e);
  }
}
function isMatch(value, lowerQ) {
  return value.toLowerCase().includes(lowerQ);
}
function filterComboboxData(q, row, keys = []) {
  try {
    const lowerQ = q.toLowerCase();
    if (keys.length) {
      return keys.some(key => row[key] && isMatch(row[key], lowerQ));
    }
    else {
      const opts = $(this).combobox('options');
      return isMatch(row[opts.textField], lowerQ);
    }
  }
  catch (e) {
    errorTrace(e);
    return false; // 明确返回false，增强代码的可读性
  }
}
function getCommonCombobox(params) {
  try {
    var domId = params.domId;
    var data = params.data;
    var valueField = params.valuefield;
    var textField = params.textfield;
    var mrz = params.mrz;
    var nextid = params.nextid;
    var method = params.method;
    var changemethod = params.changemethod;
    var flag = params.flag;
    var required = params.required;
    var filter_arr = params.filter_arr;
    var mrz_index = params.mrz_index;
    var multiple = params.multiple;
    var readonly_value = false;
    var editable = params.editable;
    var emptofirst = params.emptofirst;
    if (params.readonly) {
      readonly_value = params.readonly;
    }
    if (!valueField || valueField == '') {
      valueField = 'code';
    }
    if (!textField || textField == '') {
      textField = 'name';
    }
    if (required) {
      required = true;
    }
    else {
      required = false;
    }
    if (multiple) {
      multiple = true;
    }
    else {
      multiple = false;
    }
    if (editable || editable == undefined) {
      editable = true;
    }
    else {
      editable = false;
    }
    if (emptofirst) {
      emptofirst = true;
    }
    else {
      emptofirst = false;
    }
    var isselect = true;
    $("#" + domId).combobox({
      data: data,
      valueField: valueField,
      textField: textField,
      required: required,
      multiple: multiple,
      selectOnNavigation: false,
      editable: editable,
      readonly: readonly_value,
      onLoadSuccess: function () {
        try {
          if (data.length > 0) {
            if (mrz && mrz != '') {
              if (multiple) {
                $("#" + domId).combobox('clear');
                $("#" + domId).combobox('setValues', mrz);
              }
              else {
                $("#" + domId).combobox('setValue', mrz);
              }
            }
            else if (mrz_index) {
              $("#" + domId).combobox('select', data[0][valueField]);
            }
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      filter: function (q, row) {
        try {
          var keys = new Array();
          if (filter_arr) {
            keys = filter_arr;
          }
          else {
            if (row.pym) {
              keys[keys.length] = 'pym';
            }
            keys[keys.length] = valueField;
            keys[keys.length] = textField;
          }
          return filterComboboxData(q, row, keys);
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onSelect: function (record) {
        try {
          if (isselect) {
            if (nextid) {
              $('#' + nextid).textbox("textbox").focus();
            }
            if (method && record) {
              method(record);
            }
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onChange: function (newValue, oldValue) {
        try {
          var panel = $(this).combo("panel");
          var item = panel.children("div:visible").eq(0);
          item.addClass("combobox-item-hover");
          if (changemethod) {
            changemethod(newValue, oldValue);
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onHidePanel: function () {
        try {
          var panel = $(this).combo("panel");
          $(panel.children("div")).removeClass("combobox-item-hover");
        }
        catch (e) {
          errorTrace(e);
        }
      }
    });
    if (data.length > 0) {
      var datalength = data.length;
      var index = -1;
      //console.log("domId==》"+domId)
      $("#" + domId).textbox("textbox").keyup(function (event) {
        try {
          var e = event || window.event;
          var keyCode = e.keyCode || e.which;
          if (keyCode == "38") {
            let pClosed = $("#" + domId).combobox("panel").panel("options").closed;
            if (pClosed) {
              isselect = false;
              if (index == 0 || index == -1) {
                $("#" + domId).combobox("setValue", data[Number(datalength) - 1][valueField]);
                index = Number(datalength) - 1;
              }
              else {
                index = Number(index) - 1;
                $("#" + domId).combobox("setValue", data[index][valueField]);
              }
              isselect = true;
            }
          }
          if (keyCode == "40") {
            let pClosed = $("#" + domId).combobox("panel").panel("options").closed;
            if (pClosed) {
              isselect = false;
              if (index == -1 || index == Number(datalength) - 1) {
                $("#" + domId).combobox("setValue", data[0][valueField]);
                index = 0;
              }
              else {
                index = Number(index) + 1;
                $("#" + domId).combobox("setValue", data[index][valueField]);
              }
              isselect = true;
            }
          }
          if (keyCode == "13") {
            if (nextid) {
              $('#' + nextid).textbox("textbox").focus();
            }
            if (method && data[index]) {
              method(data[index]);
            }
          }
        }
        catch (e) {
          errorTrace(e);
        }
      });
    }
    //校验数据有效性
    $("#" + domId).next().children(":text").blur(function () {
      try {
        var pClosed = $("#" + domId).combobox("panel").panel("options").closed;
        if (pClosed && editable) {
          var textvalue = $("#" + domId).combobox('getText');
          var combodata = $("#" + domId).combobox('getData');
          var idvalue = $("#" + domId).combobox('getValue');
          var setValue = "";
          $.each(combodata, function (_i, n) {
            if (textvalue == n[textField]) {
              setValue = n[valueField];
              return false;
            }
            else {
              if (flag) {
                setValue = textvalue;
              }
              else {
                setValue = "";
              }
            }
          });
          if (setValue != idvalue || setValue == "") {
            $("#" + domId).combobox("setValue", setValue);
            if (flag == true) {
              $("#" + domId).combobox("setText", textvalue);
            }
            if (required && $("#" + domId).combobox("getText") == "") {
              //$("#"+domId).textbox("textbox").focus();
              //return;
            }
          }
          if (emptofirst && setValue == "") {
            var tempData = {};
            if (combodata.length > 0) {
              tempData = combodata[0];
            }
            setValue = tempData[valueField];
            $("#" + domId).combobox("setValue", setValue);
          }
        }
      }
      catch (e) {
        errorTrace(e);
      }
    });
  }
  catch (e) {
    errorTrace(e);
  }
}
function getCommonCombogrid(params) {
  try {
    var id = params.id;
    var columns_arr = params.columns;
    var idField = params.idField;
    var textField = params.textField;
    var querymethod = params.querymethod;
    var selectmethod = params.selectmethod;
    var nextid = params.nextid;
    var comboclass = params.comboclass;
    var extramethod = params.extramethod;
    var flag = params.flag;
    var panelWidth = params.panelWidth;
    var nowrap = params.nowrap;
    var panelHeight = params.panelHeight;
    var pagination = params.pagination;
    var required = params.required;
    var pageSize = params.pageSize;
    var pageList = params.pageList;
    if (!pageSize) {
      pageSize = 10;
    }
    if (!pageList) {
      pageList = [10, 20, 30, 40, 50];
    }
    if (required) {
      required = true;
    }
    else {
      required = false;
    }
    if (!nowrap) {
      nowrap = true;
    }
    var selectedindex = 0;
    var firstsearch = true;
    var blanksearch = params.blanksearch;
    //动态设置展示列
    var columns = [];
    for (var i = 0; i < columns_arr.length; i++) {
      //动态设置展示列
      var cols = [];
      var col_arr = columns_arr[i];
      $(col_arr).each(function () {
        var _align = this[3];
        var _rowspan = this[4];
        var _colspan = this[5];
        var _width = this[6];
        if (!_align) {
          _align = 'center';
        }
        if (!_rowspan) {
          _rowspan = 1;
        }
        if (!_colspan) {
          _colspan = 1;
        }
        if (!_width) {
          _width = 100;
        }
        var column = { field: this[0], title: this[1], sortable: false, align: _align, rowspan: _rowspan, colspan: _colspan, halign: "center", width: _width };
        if (this[2] && this[2] != '') {
          var column_width = this[2];
          column.width = column_width;
          column.formatter = function (value) {
            if (value) {
              if (200 / 14 * value.length > column_width) {
                //var famtterValue = value.substr(0, 14/200*column_width)+'...';
                return '<span title=' + value + '>' + value + '</span>';
              }
            }
            return value;
          };
        }
        cols.push(column);
      });
      columns[i] = cols;
    }
    if (!panelWidth) {
      panelWidth = 300;
    }
    if (!panelHeight) {
      panelHeight = "auto";
    }
    if (pagination) {
      pagination = true;
    }
    else {
      pagination = false;
    }
    $("#" + id).combogrid({
      idField: idField,
      textField: textField,
      selectOnNavigation: false,
      panelHeight: panelHeight,
      panelWidth: panelWidth,
      rownumbers: true,
      fitColumns: true,
      required: required,
      pagination: pagination,
      columns: columns,
      nowrap: nowrap,
      pageSize: pageSize,
      pageList: pageList,
      onLoadSuccess: function () {
      },
      onShowPanel: function () {
      },
      onSelect: function (index, row) {
        try {
          if (nextid) {
            $('#' + nextid).textbox("textbox").focus();
          }
          else {
            $("#" + id).textbox("textbox").focus();
          }
          if (selectmethod) {
            selectmethod(index, row);
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      keyHandler: {
        enter: function () {
          try {
            let gridObject = $(this);
            var value = $(this).combogrid('getText');
            var regu = "^[ ]+$";
            var re = new RegExp(regu);
            if (re.test(value) && !blanksearch) {
              return;
            }
            if ((value && !re.test(value)) || blanksearch) {
              querymethod();
              var rows = $(this).combogrid("grid").datagrid("getRows");
              firstsearch = true;
              if (rows.length == 0) {
                $.messager.show({
                  title: '',
                  msg: '查询数据为空',
                  showType: 'slide',
                  timeout: 2000,
                  style: {
                    right: '',
                    top: document.body.scrollTop + document.documentElement.scrollTop,
                    bottom: ''
                  }
                });
                if (flag == true) {
                  $(this).combogrid('setValue', value);
                  if (nextid) {
                    setTimeout(function () {
                      $('#' + nextid).textbox("textbox").focus();
                    }, 1);
                  }
                }
                else {
                  $(this).combogrid('setValue', "");
                  $(this).combogrid('setText', "");
                }
                $(this).combogrid("hidePanel");
                return;
              }
              else if (rows.length == 1) {
                if (params.one_index_show == true) {
                  $(this).combogrid("showPanel");
                }
                else {
                  $(this).combogrid('setValue', rows[0][idField]);
                  $(this).combogrid("hidePanel");
                  if (nextid) {
                    setTimeout(function () {
                      $('#' + nextid).textbox("textbox").focus();
                    }, 1);
                  }
                  if (selectmethod) {
                    selectmethod(0, rows[0]);
                  }
                  $(this).combogrid("hidePanel");
                  return;
                }
              }
              else {
                $(this).combogrid("showPanel");
              }
              $(this).combogrid('setValue', "");
              $(this).combogrid('setText', value);
              $(this).combogrid('grid').datagrid("highlightRow", 0);
              $("#" + id).textbox("textbox").blur();
              selectedindex = 0;
              document.onkeyup = function (event) {
                try {
                  if (JSON.stringify(gridObject[0]) != "{}") {
                    var pClosed = $("#" + id).combogrid("panel").panel("options").closed;
                    if (!pClosed) {
                      var e = event || window.event;
                      var keyCode = e.keyCode || e.which;
                      if (keyCode >= 48 && keyCode <= 57) {
                        var realkey = String.fromCharCode(keyCode); //将数字形式的键值转化为真实的按键
                        $("#" + id).combogrid('grid').datagrid("highlightRow", -1);
                        $("#" + id).combogrid('grid').datagrid("highlightRow", Number(realkey) - 1);
                        selectedindex = Number(realkey) - 1;
                      }
                      if (keyCode == 38) {
                        let grid = $("#" + id).combogrid("grid");
                        if (selectedindex == 0) {
                          selectedindex = grid.datagrid("getRows").length - 1;
                        }
                        else {
                          selectedindex = Number(selectedindex) - 1;
                        }
                        grid.datagrid("highlightRow", selectedindex);
                      }
                      if (keyCode == 40) {
                        let grid = $("#" + id).combogrid("grid");
                        if (selectedindex == (grid.datagrid("getRows").length - 1)) {
                          selectedindex = 0;
                        }
                        else {
                          selectedindex = Number(selectedindex) + 1;
                        }
                        grid.datagrid("highlightRow", selectedindex);
                      }
                      if (keyCode == 13) {
                        if (!firstsearch) {
                          var rows = $("#" + id).combogrid('grid').datagrid("getRows");
                          $("#" + id).combogrid("setValue", rows[selectedindex][idField]);
                          $("#" + id).combogrid("hidePanel");
                          firstsearch = true;
                          if (nextid) {
                            $('#' + nextid).textbox("textbox").focus();
                          }
                          else {
                            $("#" + id).textbox("textbox").focus();
                          }
                          if (selectmethod) {
                            selectmethod(selectedindex, rows[selectedindex]);
                          }
                        }
                        else {
                          firstsearch = false;
                        }
                      }
                      if (keyCode == 27) {
                        $("#" + id).combogrid("setText", value);
                        $("#" + id).textbox("textbox").focus();
                        $("#" + id).combogrid("hidePanel");
                        firstsearch = true;
                      }
                      if (pagination && keyCode == 37) {
                        let pagenum = $("#" + id).combogrid("grid").datagrid("getPager").pagination('options').pageNumber;
                        if (pagenum != 1) {
                          $("#" + id).combogrid("grid").datagrid("getPager").pagination("select", pagenum - 1);
                        }
                      }
                      if (pagination && keyCode == 39) {
                        let pagenum = $("#" + id).combogrid("grid").datagrid("getPager").pagination('options').pageNumber;
                        var pageSize = $("#" + id).combogrid("grid").datagrid("getPager").pagination('options').pageSize;
                        var datatotal = $("#" + id).combogrid("grid").datagrid("getPager").pagination('options').total;
                        var pageTotal = Number(datatotal / pageSize) + 1;
                        if (pagenum != pageTotal) {
                          $("#" + id).combogrid("grid").datagrid("getPager").pagination("select", pagenum + 1);
                        }
                      }
                    }
                  }
                }
                catch (e) {
                  errorTrace(e);
                }
              };
            }
            else {
              if (nextid && !required) {
                $('#' + nextid).textbox("textbox").focus();
              }
            }
          }
          catch (e) {
            errorTrace(e);
          }
        },
        query: function (q, e) {
          try {
            $(this).combogrid("hidePanel");
            $(this).combogrid("grid").datagrid("highlightRow", -1);
            return false;
          }
          catch (e) {
            errorTrace(e);
          }
        }
      }
    });
    //是否展示combogrid右侧图标
    if (comboclass != "" && comboclass != undefined) {
      $("#" + id).next("span").children("span").children("a").removeClass("combo-arrow").addClass(comboclass);
      $("#" + id).next("span").children("span").unbind();
      $("#" + id).next("span").children("span").children("a").unbind();
      $("#" + id).next("span").children("span").children("a").click(function () {
        extramethod();
      });
    }
    else {
      $("#" + id).next("span").children("span").hide();
    }
  }
  catch (e) {
    errorTrace(e);
  }
}
function dealAjaxData(data, { isNotGetUser, isBase64, isPwd } = {}) {
  if (data.pageSize) {
    data.page = data.pageNumber;
    data.size = data.pageSize;
  }
  if (!isNotGetUser) {
    // eslint-disable-next-line no-import-assign
    let user = getUser() || {};
    data = Object.assign({}, {
      czryid: user.ryid,
      czryjgid: user.jgid,
      czryjgmc: user.jgmc,
      czryjgjc: user.jgjc,
      czryyhm: user.yhm,
      czryxm: user.xm || user.username,
      superadmin: user.superadmin
    }, data);
  }
  return JSON.stringify({ data });
}
const dics = {}, mkqx = {};
var shortcutKeys;
function setShortcutKeys(keys) {
  shortcutKeys = keys;
}
function dicget(fldm) {
  if (!dics[fldm]) {
    dics[fldm] = commonHttppost('/magic/yy10-ywjc/01/10/s-tyzd', { fldm }).data.list || [];
  }
  return dics[fldm];
}
function filterDicData(data) {
  return data.filter(it => it.mj == 1);
}
function initTreedata(data, idKey = 'id', parentIdKey = 'fid', initialStateClosed = false) {
  try {
    if (!data.length)
      return [];
    // 使用一个映射来存储所有节点，键为id，值为节点对象
    const nodeMap = new Map();
    // 初始化最终的树结构数组
    const tree = [];
    // 遍历数据，填充nodeMap并处理根节点
    data.forEach(item => {
      // 保存节点到映射中
      nodeMap.set(item[idKey], Object.assign(Object.assign({}, item), { children: [] })); // 每个节点初始化一个空的children数组
    });
    // 构建树形结构，通过pid找到父节点并添加子节点
    data.forEach(item => {
      const parentNode = nodeMap.get(item[parentIdKey]);
      if (parentNode) {
        parentNode.children.push(nodeMap.get(item[idKey]));
      }
      else {
        tree.push(nodeMap.get(item[idKey]));
      }
    });
    if (initialStateClosed) {
      tree.forEach(node => {
        if (node.children.length)
          node.state = 'closed';
        recursiveSetState(node.children);
      });
    }
    return tree;
  }
  catch (e) {
    errorTrace(e);
    return [];
  }
}
// 辅助函数，用于递归设置节点状态
function recursiveSetState(nodes) {
  nodes.forEach(node => {
    if (node.children.length) {
      node.state = 'closed';
      recursiveSetState(node.children);
    }
  });
}
function possessMkqx(mkbh, dm) {
  try {
    var id = mkbh;
    if (dm) {
      id += '-' + dm;
    }
    if (mkqx[id]) {
      return mkqx[id];
    }
    else {
      var res = commonHttppost('/magic/xt01-xtjc/03/11/s-mkqx', { mkbh, dm });
      if (res.code === 1) {
        const list = res.data.list || [];
        if (dm) {
          return mkqx[id] = ((list[0] || {}).mr || 0) + '';
        }
        else {
          return mkqx[id] = list.reduce(({ dm, mr }) => {
            dm[dm] = mr + '';
            return dm;
          }, {});
        }
      }
      else {
        alertMsg('获取权限失败:' + res.message);
      }
    }
  }
  catch (e) {
    errorTrace(e);
  }
}
function setVar(mkbh, name, value) {
  return session(`${mkbh}-${name}`, value);
}
function getCommonDic(dics) {
  try {
    //页面元素id
    var domId = dics.domid;
    //默认值
    var mrz = dics.mrz;
    //默认选择第一项
    var mrz_index = dics.mrz_index;
    //字典类别
    var dicKey = dics.dicKey;
    //是否能手动录入 1 支持 -1不支持
    var flag = dics.flag == '1';
    //获取焦点ID
    var nextid = dics.nextid;
    var changemethod = dics.changemethod;
    //必填项
    var required = dics.required;
    var valueField = dics.valueField;
    var textField = dics.textField;
    var multiple = dics.multiple;
    if (multiple) {
      multiple = true;
    }
    else {
      multiple = false;
    }
    if (!valueField) {
      valueField = 'dm';
    }
    if (!textField) {
      textField = 'dmmc';
    }
    if (required) {
      required = true;
    }
    else {
      required = false;
    }
    //是否添加一个空选项
    var addnull = dics.addnull;
    var data = dicget(dicKey);
    data = filterDicData(data);
    if (data.length > 0) { //添加一个空选项
      if (addnull == "1") {
        var row = { "dm": "", "mc": "所有", "pym": "", "dmmc": "所有" };
        data.unshift(row);
      }
    }
    //下拉框高度
    var panelHeight = dics.panelHeight;
    if (!panelHeight) {
      if (data.length > 10) {
        panelHeight = 200;
      }
      else {
        panelHeight = "";
      }
    }
    var isselect = true;
    $("#" + domId).combobox({
      data: data,
      valueField: valueField,
      textField: textField,
      selectOnNavigation: false,
      required: required,
      panelHeight: panelHeight,
      multiple: multiple,
      onLoadSuccess: function () {
        try {
          var data = $("#" + domId).combobox('getData');
          if (data.length > 0) {
            if (mrz && mrz != '') {
              $("#" + domId).combobox('select', mrz);
            }
            else if (mrz_index) {
              $("#" + domId).combobox('select', data[0][valueField]);
            }
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      filter: function (q, row) {
        var keys = ['dm', 'mc', 'dmmc', 'pym'];
        return filterComboboxData(q, row, keys);
      },
      onSelect: function (record) {
        try {
          if (isselect) {
            if (nextid) {
              $('#' + nextid).textbox("textbox").focus();
            }
            if (dics.method) {
              dics.method(record);
            }
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onChange: function (newValue, oldValue) {
        try {
          var panel = $(this).combo("panel");
          var item = panel.children("div:visible").eq(0);
          item.addClass("combobox-item-hover");
          if (changemethod) {
            changemethod(newValue, oldValue);
          }
        }
        catch (e) {
          errorTrace(e);
        }
      },
      onHidePanel: function () {
        try {
          var panel = $(this).combo("panel");
          $(panel.children("div")).removeClass("combobox-item-hover");
        }
        catch (e) {
          errorTrace(e);
        }
      }
    });
    if (data.length > 0) {
      var datalength = data.length;
      var index = -1;
      $("#" + domId).textbox("textbox").keyup((event) => {
        try {
          const { key } = event;
          const domPanel = $("#" + domId).combobox("panel");
          const panelOptions = domPanel.panel("options");
          const updateIndexAndSetValue = (step) => {
            let newIndex = index + step;
            newIndex = Math.max(0, Math.min(newIndex, datalength - 1));
            index = newIndex;
            $("#" + domId).combobox("setValue", data[newIndex][valueField]);
          };
          if (panelOptions.closed) {
            if (key === 'ArrowUp') { // 上箭头
              if (index <= 0) {
                updateIndexAndSetValue(datalength - 1);
              }
              else {
                updateIndexAndSetValue(-1);
              }
            }
            else if (key === 'ArrowDown') { // 下箭头
              if (index >= datalength - 1 || index === -1) {
                updateIndexAndSetValue(0);
              }
              else {
                updateIndexAndSetValue(1);
              }
            }
          }
          if (key === 'Enter') { // 回车
            if (nextid) {
              $('#' + nextid).textbox("textbox").focus();
            }
            if (dics.method) {
              dics.method(data[index]);
            }
          }
        }
        catch (error) {
          errorTrace(error);
        }
      });
    }
    //校验数据有效性
    $("#" + domId).next().children(":text").blur(function () {
      try {
        var pClosed = $("#" + domId).combobox("panel").panel("options").closed;
        if (pClosed) {
          var textvalue = $("#" + domId).combobox('getText');
          var combodata = $("#" + domId).combobox('getData');
          var idvalue = $("#" + domId).combobox('getValue');
          var setValue = "";
          $.each(combodata, function (i, n) {
            if (textvalue == n[textField]) {
              setValue = n[valueField];
              return false;
            }
            else {
              if (flag) {
                setValue = textvalue;
              }
              else {
                setValue = "";
              }
            }
          });
          if (setValue != idvalue || setValue == "") {
            $("#" + domId).combobox("setValue", setValue);
            if (flag == true) {
              $("#" + domId).combobox("setText", textvalue);
            }
            if (required && $("#" + domId).combobox("getText") == "") {
              //$("#"+domId).textbox("textbox").focus();
              //return;
            }
          }
        }
      }
      catch (e) {
        errorTrace(e);
      }
    });
  }
  catch (e) {
    errorTrace(e);
  }
}
function initBaseBar(menus, buttons) {
  try {
    //渲染基础顶部菜单栏
    var menutitles = ["文件", "编辑", "查看", "报表", "帮助"];
    var menuIcons = ["icon-extend-file", "icon-extend-edit", "icon-extend-view", "icon-extend-view", "icon-extend-view"];
    menus.forEach((n, i) => {
      if (n.length > 0) {
        $("#topmenu").append('<a id="menu' + i + '" href="#" style="margin-left:1px;" >' + menutitles[i] + '</a>');
        //生成menu下拉项
        var html = "<div id='menudiv" + i + "'></div>";
        $("#topmenu").append(html);
        $("#menu" + i).menubutton({
          plain: false,
          width: 80,
          height: 40,
          iconCls: menuIcons[i],
          menu: "#menudiv" + i
        });
        n.forEach((k, j) => {
          $("#menudiv" + i).menu('appendItem', {
            text: k.name,
            iconCls: k.icon,
            id: k.id
          });
          $("#menudiv" + i).children("div").eq(j + 1).click(function () {
            try {
              if (k.id) {
                k["method"](k.id);
              }
              else {
                k["method"]();
              }
            }
            catch (e) {
              errorTrace(e);
            }
          });
        });
      }
    });
    //渲染基础顶部按钮
    buttons.forEach((n, i) => {
      $("#topbutton").append('<a id="button' + i + '" href="#"  style="margin-left:5px;">' + n.name + '</a>');
      var width = n.width;
      if (!width) {
        width = 80;
      }
      if (n.menuid) {
        $("#button" + i).splitbutton({
          plain: true,
          //selected:true,height:40,
          height: 40,
          width: width,
          iconCls: n["icon"],
          onClick: n["method"],
          id: n.id,
          menu: "#" + n.menuid
        });
      }
      else {
        $("#button" + i).linkbutton({
          plain: true,
          //selected:true,
          width: width,
          height: 40,
          iconCls: n["icon"],
          onClick: n["method"],
          id: n.id
        });
      }
    });
    setTimeout(function () {
      $("#topmenu").parent().attr("style", "overflow: hidden;height: 40px;background-color: white;vertical-align: middle;");
      $("#topbutton").css("width", document.body.clientWidth - document.getElementById("topmenu").offsetWidth - 35);
      $('#bodydiv').layout('panel', 'north').panel('resize', { height: document.getElementById("topbutton").offsetHeight });
      $('#bodydiv').layout('panel', 'north').panel('options').maxHeight = 80;
      $('#bodydiv').layout();
      $("#topmenu").css("margin-top", ($("#topmenu").parent().height() - $("#topmenu").height()) / 2);
      var height = $("#topmenu").parent().height() - 20;
      $("#topmenu").after("<div class=\"menuclass\" style=\"margin-top: 10px;color: white;float:left;height: " + height + "px;vertical-align: middle;\"></div>");
    }, 10);
  }
  catch (e) {
    errorTrace(e);
  }
}
function initDadaGrid_tab(gridid, columns_arr, url, params, pageSize, title, fitColumns, nowrap) {
  try {
    fitColumns = !!fitColumns;
    //判断是否分页
    var isPagination = false;
    if (pageSize > 0) {
      isPagination = true;
    }
    else {
      pageSize = 10;
    }
    if (nowrap != false) {
      nowrap = true;
    }
    //动态设置展示列
    var columns = [];
    for (var i = 0; i < columns_arr.length; i++) {
      //动态设置展示列
      var cols = [];
      var col_arr = columns_arr[i];
      $(col_arr).each(function () {
        var _align = this[3];
        var _rowspan = this[4];
        var _colspan = this[5];
        if (!_align) {
          _align = 'center';
        }
        if (!_rowspan) {
          _rowspan = 1;
        }
        if (!_colspan) {
          _colspan = 1;
        }
        var column = { field: this[0], title: this[1], sortable: false, align: _align, rowspan: _rowspan, colspan: _colspan, halign: "center" };
        if (this[6]) {
          column.sortable = true;
        }
        if (this[2] && this[2] != '') {
          var column_width = this[2];
          column.width = column_width;
          column.formatter = function (value) {
            if (value && (200 / 14 * value.length > column_width)) {
              return '<span title=' + value + '>' + value + '</span>';
            }
            return value;
          };
        }
        else {
          if (!fitColumns) {
            column.width = 56;
          }
        }
        cols.push(column);
      });
      columns[i] = cols;
    }
    $("#" + gridid).datagrid({
      url: url,
      //iconCls: "icon-add",
      title: title,
      fitColumns: fitColumns,
      idField: 'id',
      fit: true,
      loadMsg: "加载数据中...",
      rownumbers: true,
      singleSelect: true,
      remoteSort: false,
      pagination: isPagination,
      pageSize: pageSize,
      queryParams: params,
      columns: columns,
      nowrap: nowrap
    });
    setTimeout(function () {
      $(".align_center").parent().parent().css("text-align", "center");
    }, 0);
  }
  catch (e) {
    errorTrace(e);
  }
}
function initNextInputFocus(formID, domID) {
  $(document).on('keyup', '#' + formID + ' input, a.easyui-linkbutton', function (e) {
    try {
      if (e.keyCode == 13 && e.target.type != 'submit') {
        if (domID && e.target.id == domID) {
          return;
        }
        var inputs = $(e.target).parents("form").eq(0).find(":input:visible:not(:disabled):not([readonly]), a.easyui-linkbutton");
        var idx = inputs.index(e.target);
        var input_ = $(e.target).parent().prev();
        //如果是searchbox，回车光标不下移
        if (!input_.is('.easyui-searchbox') && !input_.is('.easyui-combogrid')) {
          if (idx == inputs.length - 1) {
            if (inputs[0]) {
              inputs[0].select();
            }
            //inputs[0].trigger('click');
          }
          else {
            inputs[idx + 1].focus();
            if (inputs[idx + 1].tagName == "INPUT") {
              if (inputs[idx + 1]) {
                inputs[idx + 1].select();
              }
              //inputs[idx + 1].trigger('click');
            }
          }
        }
      }
      //光标上下键则展开combobox
      //				if(e.keyCode == 38 || e.keyCode == 40 && e.target.type != 'submit') {
      //					if(e.target.tagName == "INPUT"){
      //						var combobox_ = $(e.target).parent().prev();
      //						if(combobox_.is('.easyui-combobox')){
      //							if(combobox_.combobox('panel').panel("options").closed){
      //								combobox_.combobox('showPanel');
      //							}
      //						}
      //					}
      //				}
      //alt组合键则为快捷键
      if (e.altKey) {
        if (e.keyCode == 83) {
          var button_sub = $("a[shortcutKey='S']");
          button_sub.click();
        }
      }
    }
    catch (e) {
      errorTrace(e);
    }
  });
}
function initShortcutKey() {
  $(document).keydown(function (e) {
    try {
      var keyEvent;
      if (e.code === 'Backspace') {
        var d = e.target;
        if (d.tagName.toUpperCase() === 'INPUT' || d.tagName.toUpperCase() === 'TEXTAREA' || (d.tagName.toUpperCase() === 'DIV' && d.contentEditable === 'true')) {
          keyEvent = d.readOnly || d.disabled;
        }
        else {
          keyEvent = true;
        }
      }
      else {
        keyEvent = false;
      }
      if (keyEvent) {
        e.preventDefault();
      }
      if (shortcutKeys && shortcutKeys[e.code]) {
        shortcutKeys[e.code]();
      }
    }
    catch (e) {
      errorTrace(e);
    }
  });
}
function nvl(data, mrz) {
  if (!data || data == 'null' || data == null) {
    if (mrz) {
      return mrz;
    }
    else {
      return '';
    }
  }
  else {
    return data;
  }
}
function toDecimalNumber(num, precision) {
  try {
    if (num == '') {
      num = '0';
      //return '0';
    }
    if (precision) {
      precision = parseInt(precision, 10);
      let f = parseFloat(num);
      if (!isNaN(f)) {
        if (precision > 0) {
          return f.toFixed(precision);
        }
        else {
          return num;
        }
      }
    }
    else {
      let f = parseFloat(num);
      if (!isNaN(f)) {
        return num;
      }
      else {
        return num;
      }
    }
  }
  catch (e) {
    errorTrace(e);
  }
}




function format(fmt = 'yyyy/MM/dd') {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
function addDay(num = 1) {
  num = Number(num);
  if (num > parseInt(num)) {
    return this.addHour(num * 24);
  }
  let date = new Date(this);
  date.setDate(date.getDate() + num);
  return date;
}
function addHour(num = 1) {
  num = Number(num);
  if (num > parseInt(num)) {
    return this.addMinute(num * 60);
  }
  let date = new Date(this);
  date.setHours(date.getHours() + num);
  return date;
}
function addMinute(num) {
  num = Number(num);
  if (num > parseInt(num)) {
    return this.addSeconds(num * 60);
  }
  let date = new Date(this);
  date.setMinutes(date.getMinutes() + num);
  return date;
}
function addSeconds(num) {
  let date = new Date(this);
  date.setSeconds(date.getSeconds() + num);
  return date;
}
function getMonthDays() {
  let date = new Date(this);
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  return date.getDate();
}
function getYearDay() {
  let date = new Date(this);
  date.setMonth(2);
  date.setDate(0);
  return date.getDate() === 28 ? 365 : 366;
}
function addMonth(num = 1) {
  let date = new Date(this), m = date.getMonth();
  num = Number(num);
  date.setMonth(m + num);
  if ((m + num) % 12 < date.getMonth()) {
    date = date.addMonth(-1);
    date.setDate(date.getMonthDays());
  }
  return date;
}
function addYear(num = 1) {
  let date = new Date(this), m = date.getMonth();
  num = Number(num);
  date.setFullYear(date.getFullYear() + num);
  if (m < date.getMonth()) {
    date = date.addMonth(-1);
    date.setDate(date.getMonthDays());
  }
  return date;
}
function getWeek(num = 1) {
  let date = new Date(this);
  num = Number(num);
  date.setDate(date.getDate() + num - (date.getDay() || 7));
  return date;
}
function getMonthDay(num = 1) {
  let date = new Date(this);
  date.setDate(num);
  return date;
}
function getSeason(num = 1) {
  let date = new Date(this);
  date.setMonth(Math.floor(date.getMonth() / 3) * 3);
  date.setDate(num);
  return date;
}
if (!Date.prototype.format) {
  Date.prototype.format = format;
  Date.prototype.addDay = addDay;
  Date.prototype.addHour = addHour;
  Date.prototype.addMinute = addMinute;
  Date.prototype.addSeconds = addSeconds;
  Date.prototype.getMonthDays = getMonthDays;
  Date.prototype.getYearDay = getYearDay;
  Date.prototype.addMonth = addMonth;
  Date.prototype.addYear = addYear;
  Date.prototype.getWeek = getWeek;
  Date.prototype.getMonthDay = getMonthDay;
  Date.prototype.getSeason = getSeason;
}
// 字符串处理
function dateFormat(fmt = 'yyyy/MM/dd') {
  const fmtArr = fmt.split('');
  let i = 0, v = this.match(/[0-9]/g);
  return fmtArr.map(it => {
    if (/[yMdhms]/.test(it)) {
      it = v[i] || '';
      i++;
    }
    return it;
  }).join('');
}
function toDate(fmt, fmt1) {
  const fmtArr = fmt.split('');
  var str = 'yyyy/MM/dd hh:mm:ss', i = 0;
  fmtArr.forEach((it) => {
    if (/[yMdhmsS]/.test(it)) {
      str = str.replace(it, this[i] || '0');
      i++;
    }
    else if (this[i] == ' ' || isNaN(this[i])) {
      i++;
    }
  });
  const date = new Date(str.replace(/[yMdhmsS]/g, '0').replace(/\/00/g, '/01'));
  if (fmt1) {
    return date.format(fmt1);
  }
  return date;
}
if (!String.prototype.dateFormat) {
  String.prototype.dateFormat = dateFormat;
  String.prototype.toDate = toDate;
}
Class.prototype = { comboGridPageChange, dataGridPageChange, getCommonCombogrid, getCommonCombobox, getCommonDic, initBaseBar, initDadaGrid_tab, initNextInputFocus, initShortcutKey, loadComboGrigPageData, nvl, toDecimalNumber, dealAjaxData, dicget, filterComboboxData, filterDicData, initTreedata, loadDataGrigPageData, possessMkqx, setVar, setShortcutKeys, commonHttppost: commonHttppost, commonQueryAsyncHttppost_callback: commonQueryAsyncHttppost_callback, getAjax: getAjax, getAjaxSync: getAjaxSync, getConfig: getConfig, errorTrace: errorTrace, getUser: getUser, openDialog: openDialog, openMsgBox: openMsgBox }
// PLUGIN IGNORE START

// PLUGIN IGNORE END
w.jtUtil = new Class()
export { Class }