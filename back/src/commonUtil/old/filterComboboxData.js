export function filterComboboxData(q, row, keys) {
  try {
    if (keys && keys.length > 0) {
      for (var i = 0; i < keys.length; i++) {
        if (row[keys[i]]) {
          var result = row[keys[i]].toLowerCase().indexOf(q) > -1;
          if (result == true) {
            return true;
          }
        }
      }
    } else {
      var opts = $(this).combobox("options");
      return row[opts.textField].toLowerCase().indexOf(q) > -1;
    }
  } catch (e) {
    JsErrorTrace(e);
  }
}
