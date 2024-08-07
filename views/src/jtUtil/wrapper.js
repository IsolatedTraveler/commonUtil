(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  // @CODE
  $.fn.serializeObject = function () {
    try {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function () {
        if (o[this.name]) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
        } else {
          o[this.name] = this.value || '';
        }
      });
      return o;
    } catch (e) {
      errorTrace(e);
    }
  }
})(window, document);
