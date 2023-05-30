import { endCellEdit, getNextEditor } from "./old/getEditorCombogrid";

w.JsErrorTrace = function (e) {
  console.error(e);
};
$.fn.serializeOriginObject = function () {
  try {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  } catch (e) {
    JsErrorTrace(e);
  }
};
$.fn.serializeObject = function () {
  try {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        //o[this.name].push(encodeURIComponent(this.value) || '');
        o[this.name].push(this.value || "");
      } else {
        //o[this.name] = encodeURIComponent(this.value) || '';
        o[this.name] = this.value || "";
      }
    });
    return o;
  } catch (e) {
    JsErrorTrace(e);
  }
};
if ($.fn.datagrid) {
  $.extend($.fn.datagrid.methods, {
    editCell: function (jq, param) {
      try {
        return jq.each(function () {
          editCell(this, param);
        });
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    isEditing: function (jq, index) {
      try {
        var opts = $.data(jq[0], "datagrid").options;
        var tr = opts.finder.getTr(jq[0], index);
        return tr.length && tr.hasClass("datagrid-row-editing");
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    gotoCell: function (jq, param) {
      try {
        return jq.each(function () {
          gotoCell(this, param);
        });
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    enableCellEditing: function (jq) {
      try {
        return jq.each(function () {
          enableCellEditing(this);
        });
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    disableCellEditing: function (jq) {
      try {
        return jq.each(function () {
          disableCellEditing(this);
        });
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    enableCellSelecting: function (jq) {
      try {
        return jq.each(function () {
          enableCellSelecting(this);
        });
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    disableCellSelecting: function (jq) {
      try {
        return jq.each(function () {
          disableCellSelecting(this);
        });
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    input: function (jq, param) {
      try {
        if (!param) {
          return null;
        }
        var ed = jq.datagrid("getEditor", param);
        if (ed) {
          var t = $(ed.target);
          if (t.hasClass("textbox-f")) {
            t = t.textbox("textbox");
          }
          return t;
        } else {
          return null;
        }
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    cell: function (jq) {
      // get current cell info {index,field}
      try {
        return getCurrCell(jq[0]);
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    getSelectedCells: function (jq) {
      try {
        return getSelectedCells(jq[0]);
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    addEditor: function (jq, param) {
      if (param instanceof Array) {
        $.each(param, function (index, item) {
          var e = $(jq).datagrid("getColumnOption", item.field);
          e.editor = item.editor;
        });
      } else {
        var e = $(jq).datagrid("getColumnOption", param.field);
        e.editor = param.editor;
      }
    },
    removeEditor: function (jq, param) {
      if (param instanceof Array) {
        $.each(param, function (index, item) {
          var e = $(jq).datagrid("getColumnOption", item);
          e.editor = {};
        });
      } else {
        var e = $(jq).datagrid("getColumnOption", param);
        e.editor = {};
      }
    },
  });
  $.extend($.fn.datagrid.defaults, {
    clickToEdit: true,
    dblclickToEdit: false,
    navHandler: {
      37: function (e) {
        var opts = $(this).datagrid("options");
        return navHandler.call(this, e, opts.isRtl ? "right" : "left");
      },
      39: function (e) {
        var opts = $(this).datagrid("options");
        return navHandler.call(this, e, opts.isRtl ? "left" : "right");
      },
      38: function (e) {
        return navHandler.call(this, e, "up");
      },
      40: function (e) {
        return navHandler.call(this, e, "down");
      },
      13: function (e) {
        return enterHandler.call(this, e);
      },
      27: function (e) {
        return escHandler.call(this, e);
      },
      8: function (e) {
        var dg = $(this);
        var param = dg.datagrid("cell");
        var d = e.srcElement || e.target;
        if (!param || d.tagName.toUpperCase() != "INPUT") {
          e.preventDefault();
        }
        return clearHandler.call(this, e);
      },
      46: function (e) {
        //删除row
        return deleteDataGridRow.call(this, e);
        //return clearHandler.call(this, e);
      },
      keypress: function (e) {
        if (e.metaKey || e.ctrlKey) {
          return;
        }
        var dg = $(this);
        var param = dg.datagrid("cell"); // current cell information
        if (!param) {
          return;
        }
        var input = dg.datagrid("input", param);
        if (!input) {
          var tmp = $("<span></span>");
          tmp.html(String.fromCharCode(e.which));
          var c = tmp.text();
          tmp.remove();
          if (c) {
            dg.datagrid("editCell", {
              index: param.index,
              field: param.field,
              value: c,
            });
            return false;
          }
        }
      },
    },
    onBeforeCellEdit: function (index, field) { },
    onCellEdit: function (index, field, value) {
      var input = $(this).datagrid("input", { index: index, field: field });
      if (input) {
        if (value != undefined) {
          input.val(value);
        }
      }
    },
    onSelectCell: function (index, field) {
      $(this)
        .parent()
        .find(".datagrid-btable")
        .eq(1)
        .find("tr")
        .each(function (i, o) {
          if (index == i) {
            $(o).css("background-color", "#FFFF80");
            $(o).css("font-weight", "bold");
          } else {
            $(o).css("background-color", "#FAFAFA");
            $(o).css("font-weight", "");
          }
        });
    },
    onUnselectCell: function (index, field) { },
  });
}
function disableCellEditing(target) {
  try {
    var dg = $(target);
    var panel = dg.datagrid("getPanel");
    var opts = dg.datagrid("options");
    opts.onClickCell = opts.oldOnClickCell || opts.onClickCell;
    opts.onDblClickCell = opts.oldOnDblClickCell || opts.onDblClickCell;
    opts.onBeforeSelect = opts.OldOnBeforeSelect || opts.onBeforeSelect;
    panel
      .unbind(".cellediting")
      .find("td.datagrid-row-selected")
      .removeClass("datagrid-row-selected");
    panel.panel("panel").unbind(".cellediting");
  } catch (e) {
    JsErrorTrace(e);
  }
}
function enableCellEditing(target) {
  try {
    var dg = $(target);
    var opts = dg.datagrid("options");
    var panel = dg.datagrid("getPanel");
    panel
      .attr("tabindex", 1)
      .css("outline-style", "none")
      .unbind(".cellediting")
      .bind("keydown.cellediting", function (e) {
        try {
          var h = opts.navHandler[e.keyCode];
          if (h) {
            return h.call(target, e);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      })
      .bind("keypress.cellediting", function (e) {
        try {
          return opts.navHandler["keypress"].call(target, e);
        } catch (e) {
          JsErrorTrace(e);
        }
      });
    panel
      .panel("panel")
      .unbind(".cellediting")
      .bind("keydown.cellediting", function (e) {
        try {
          e.stopPropagation();
        } catch (e) {
          JsErrorTrace(e);
        }
      })
      .bind("keypress.cellediting", function (e) {
        try {
          e.stopPropagation();
        } catch (e) {
          JsErrorTrace(e);
        }
      })
      .bind("mouseover.cellediting", function (e) {
        try {
          var td = $(e.target).closest("td[field]");
          if (td.length) {
            td.addClass("datagrid-row-over");
            td.closest("tr.datagrid-row").removeClass("datagrid-row-over");
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      })
      .bind("mouseout.cellediting", function (e) {
        try {
          var td = $(e.target).closest("td[field]");
          td.removeClass("datagrid-row-over");
        } catch (e) {
          JsErrorTrace(e);
        }
      });

    opts.isRtl =
      dg.datagrid("getPanel").css("direction").toLowerCase() == "rtl";
    opts.oldOnClickCell = opts.onClickCell;
    opts.oldOnDblClickCell = opts.onDblClickCell;
    opts.onClickCell = function (index, field, value) {
      try {
        if (opts.clickToEdit) {
          var rows = dg.datagrid("getRows"); // get current page rows
          //结果是否可编辑:不为不可编辑才可以编辑
          if (rows[index].jgsfkbj != "bkbj") {
            $(this).datagrid("editCell", { index: index, field: field });
          }
        } else {
          if (endCellEdit(this, true)) {
            $(this).datagrid("gotoCell", {
              index: index,
              field: field,
            });
          }
        }
        opts.oldOnClickCell.call(this, index, field, value);
      } catch (e) {
        JsErrorTrace(e);
      }
    };
    if (opts.dblclickToEdit) {
      opts.onDblClickCell = function (index, field, value) {
        try {
          $(this).datagrid("editCell", { index: index, field: field });
          opts.oldOnDblClickCell.call(this, index, field, value);
        } catch (e) {
          JsErrorTrace(e);
        }
      };
    }
    opts.OldOnBeforeSelect = opts.onBeforeSelect;
    opts.onBeforeSelect = function () {
      return false;
    };
    dg.datagrid("clearSelections");
  } catch (e) {
    JsErrorTrace(e);
  }
}
function disableCellSelecting(target) {
  try {
    var dg = $(target);
    var state = dg.data("datagrid");
    var panel = dg.datagrid("getPanel");
    var opts = state.options;
    opts.onBeforeSelect = opts.OldOnBeforeSelect || opts.onBeforeSelect;
    panel
      .unbind(".cellediting")
      .find("td.datagrid-row-selected")
      .removeClass("datagrid-row-selected");
    var dc = state.dc;
    dc.body1.add(dc.body2).unbind("cellediting");
  } catch (e) {
    JsErrorTrace(e);
  }
}
function enableCellSelecting(target) {
  try {
    var dg = $(target);
    var state = dg.data("datagrid");
    var panel = dg.datagrid("getPanel");
    var opts = state.options;
    var dc = state.dc;
    panel
      .attr("tabindex", 1)
      .css("outline-style", "none")
      .unbind(".cellediting")
      .bind("keydown.cellediting", function (e) {
        try {
          var h = opts.navHandler[e.keyCode];
          if (h) {
            return h.call(target, e);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      });
    dc.body1
      .add(dc.body2)
      .unbind(".cellediting")
      .bind("click.cellediting", function (e) {
        try {
          var tr = $(e.target).closest(".datagrid-row");
          if (tr.length && tr.parent().length) {
            var td = $(e.target).closest("td[field]", tr);
            if (td.length) {
              var index = parseInt(tr.attr("datagrid-row-index"));
              var field = td.attr("field");
              var p = {
                index: index,
                field: field,
              };
              if (opts.singleSelect) {
                selectCell(target, p);
              } else {
                if (opts.ctrlSelect) {
                  if (e.ctrlKey) {
                    if (td.hasClass("datagrid-row-selected")) {
                      unselectCell(target, p);
                    } else {
                      selectCell(target, p);
                    }
                  } else {
                    unselectAllCells(target);
                    selectCell(target, p);
                  }
                } else {
                  if (td.hasClass("datagrid-row-selected")) {
                    unselectCell(target, p);
                  } else {
                    selectCell(target, p);
                  }
                }
              }
            }
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      })
      .bind("mouseover.cellediting", function (e) {
        try {
          var td = $(e.target).closest("td[field]");
          if (td.length) {
            td.addClass("datagrid-row-over");
            td.closest("tr.datagrid-row").removeClass("datagrid-row-over");
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      })
      .bind("mouseout.cellediting", function (e) {
        try {
          var td = $(e.target).closest("td[field]");
          td.removeClass("datagrid-row-over");
        } catch (e) {
          JsErrorTrace(e);
        }
      });

    opts.isRtl =
      dg.datagrid("getPanel").css("direction").toLowerCase() == "rtl";
    opts.OldOnBeforeSelect = opts.onBeforeSelect;
    opts.onBeforeSelect = function () {
      return false;
    };
    dg.datagrid("clearSelections");
  } catch (e) {
    JsErrorTrace(e);
  }
}
function editCell(target, param) {
  try {
    var dg = $(target);
    dg.datagrid("options").rowIndex = param.index;
    dg.datagrid("options").fieldName = param.field;
    var opts = dg.datagrid("options");
    var input = dg.datagrid("input", param);
    if (input) {
      dg.datagrid("gotoCell", param);
      input.focus();
      return;
    }
    if (!endCellEdit(target, true)) {
      return;
    }
    if (opts.onBeforeCellEdit.call(target, param.index, param.field) == false) {
      return;
    }

    var fields = dg
      .datagrid("getColumnFields", true)
      .concat(dg.datagrid("getColumnFields"));
    $.map(fields, function (field) {
      var col = dg.datagrid("getColumnOption", field);
      col.editor1 = col.editor;
      if (field != param.field) {
        col.editor = null;
      }
    });

    var col = dg.datagrid("getColumnOption", param.field);
    if (col.editor) {
      dg.datagrid("beginEdit", param.index);
      input = dg.datagrid("input", param);
      if (input) {
        dg.datagrid("gotoCell", param);
        setTimeout(function () {
          input
            .unbind(".cellediting")
            .bind("keydown.cellediting", function (e) {
              if (e.keyCode == 13) {
                opts.navHandler["13"].call(target, e);
                return false;
              }
            });
          input.focus();
        }, 0);
        opts.onCellEdit.call(target, param.index, param.field, param.value);
      } else {
        dg.datagrid("cancelEdit", param.index);
        dg.datagrid("gotoCell", param);
      }
    } else {
      dg.datagrid("gotoCell", param);
    }

    $.map(fields, function (field) {
      var col = dg.datagrid("getColumnOption", field);
      col.editor = col.editor1;
    });
  } catch (e) {
    JsErrorTrace(e);
  }
}
function gotoCell(target, p) {
  try {
    var dg = $(target);
    var opts = dg.datagrid("options");
    var panel = dg.datagrid("getPanel").focus();

    var cparam = dg.datagrid("cell");
    if (cparam) {
      var input = dg.datagrid("input", cparam);
      if (input) {
        input.focus();
        return;
      }
    }

    if (typeof p == "object") {
      _go(p, dg, opts, target);
      return;
    }
    var cell = panel.find("td.datagrid-row-selected");
    if (!cell) {
      return;
    }
    var fields = dg
      .datagrid("getColumnFields", true)
      .concat(dg.datagrid("getColumnFields"));
    var field = cell.attr("field");
    var tr = cell.closest("tr.datagrid-row");
    var rowIndex = parseInt(tr.attr("datagrid-row-index"));
    var colIndex = $.inArray(field, fields);

    if (p == "up" && rowIndex > 0) {
      rowIndex--;
    } else if (p == "down") {
      if (opts.finder.getRow(target, rowIndex + 1)) {
        rowIndex++;
      }
    } else if (p == "left") {
      var i = colIndex - 1;
      while (i >= 0) {
        var col = dg.datagrid("getColumnOption", fields[i]);
        if (!col.hidden) {
          colIndex = i;
          break;
        }
        i--;
      }
    } else if (p == "right") {
      i = colIndex + 1;
      while (i <= fields.length - 1) {
        col = dg.datagrid("getColumnOption", fields[i]);
        if (!col.hidden) {
          colIndex = i;
          break;
        }
        i++;
      }
    }

    field = fields[colIndex];

    _go({ index: rowIndex, field: field }, dg, opts, target);

  } catch (e) {
    JsErrorTrace(e);
  }
}
function _go(p, dg, opts, target) {
  dg.datagrid("scrollTo", p.index);
  unselectAllCells(target);
  selectCell(target, p);
  var td = opts.finder
    .getTr(target, p.index, "body", 2)
    .find('td[field="' + p.field + '"]');
  if (td.length) {
    var body2 = dg.data("datagrid").dc.body2;
    var left = td.position().left;
    if (left < 0) {
      body2._scrollLeft(body2._scrollLeft() + left * (opts.isRtl ? -1 : 1));
    } else if (left + td._outerWidth() > body2.width()) {
      body2._scrollLeft(
        body2._scrollLeft() +
        (left + td._outerWidth() - body2.width()) * (opts.isRtl ? -1 : 1)
      );
    }
  }
}
function getSelectedCells(target) {
  try {
    var cells = [];
    var panel = $(target).datagrid("getPanel");
    panel.find("td.datagrid-row-selected").each(function () {
      var td = $(this);
      cells.push({
        index: parseInt(
          td.closest("tr.datagrid-row").attr("datagrid-row-index")
        ),
        field: td.attr("field"),
      });
    });
    return cells;
  } catch (e) {
    JsErrorTrace(e);
  }
}
function unselectAllCells(target) {
  try {
    var panel = $(target).datagrid("getPanel");
    panel.find("td.datagrid-row-selected").removeClass("datagrid-row-selected");
  } catch (e) {
    JsErrorTrace(e);
  }
}
function selectCell(target, p) {
  try {
    var opts = $(target).datagrid("options");
    if (opts.singleSelect) {
      unselectAllCells(target);
    }
    var cell = opts.finder
      .getTr(target, p.index)
      .find('td[field="' + p.field + '"]');
    cell.addClass("datagrid-row-selected");
    opts.onSelectCell.call(target, p.index, p.field);
  } catch (e) {
    JsErrorTrace(e);
  }
}
function unselectCell(target, p) {
  try {
    var opts = $(target).datagrid("options");
    var cell = opts.finder
      .getTr(target, p.index)
      .find('td[field="' + p.field + '"]');
    cell.removeClass("datagrid-row-selected");
    opts.onUnselectCell.call(target, p.index, p.field);
  } catch (e) {
    JsErrorTrace(e);
  }
}
function getCurrCell(target) {
  try {
    var cell = $(target).datagrid("getPanel").find("td.datagrid-row-selected");
    if (cell.length) {
      return {
        index: parseInt(
          cell.closest("tr.datagrid-row").attr("datagrid-row-index")
        ),
        field: cell.attr("field"),
      };
    } else {
      return null;
    }
  } catch (e) {
    JsErrorTrace(e);
  }
}
function navHandler(e, dir) {
  try {
    var dg = $(this);
    var param = dg.datagrid("cell");
    var input = dg.datagrid("input", param);
    if (!input) {
      dg.datagrid("gotoCell", dir);
      return false;
    }
  } catch (e) {
    JsErrorTrace(e);
  }
}
function enterHandler(e) {
  try {
    var dg = $(this);
    var cell = dg.datagrid("cell");
    if (!cell) {
      return;
    }
    var a = dg.datagrid("getEditor", cell);
    if (a && a.type != "combogrid") {
      var input = dg.datagrid("input", cell);
      if (input) {
        var valida = endCellEdit(this, true);
        if (!valida) {
          return;
        }
        getNextEditor(dg, cell);
      } else {
        dg.datagrid("editCell", cell);
      }
      return false;
    }
  } catch (e) {
    JsErrorTrace(e);
  }
}
function escHandler(e) {
  try {
    endCellEdit(this, false);
    return false;
  } catch (e) {
    JsErrorTrace(e);
  }
}
function clearHandler(e) {
  try {
    var dg = $(this);
    var param = dg.datagrid("cell");
    if (!param) {
      return;
    }
    var input = dg.datagrid("input", param);
    if (!input) {
      dg.datagrid("editCell", {
        index: param.index,
        field: param.field,
        value: "",
      });
      return false;
    }
  } catch (e) {
    JsErrorTrace(e);
  }
}
function deleteDataGridRow(e) {
  try {
    window.delDataGridRow_edit(this);
  } catch (e) {
    JsErrorTrace(e);
  }
}