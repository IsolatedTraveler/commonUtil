(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  // @CODE
  /**
 * @description 为jQuery扩展一个方法，用于将表单元素序列化为一个JavaScript对象。
 * 这个方法处理复选框和同名输入字段，将它们组织成数组。
 * 
 * 使用方法:
 * var formData = $('form').serializeObject();
 */
  $.fn.serializeObject = function () {
    try {
      var serializedData = {};
      var formDataArray = this.serializeArray();
      formDataArray.forEach(function (item) {
        if (serializedData[item.name]) {
          if (!Array.isArray(serializedData[item.name])) {
            serializedData[item.name] = [serializedData[item.name]];
          }
          serializedData[item.name].push(item.value || '');
        } else {
          serializedData[item.name] = item.value || '';
        }
      });
      return serializedData;
    } catch (e) {
      errorTrace(e);
    }
  };
})(window, document);
