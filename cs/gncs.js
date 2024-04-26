(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  let user;
  function ajaxPostData(data = {}, option = {}, config = {}, type = 'POST') {
    if (that && that.dealAjaxData) {
      return that.dealAjaxData(data, option, config, type);
    }
    else {
      return JSON.stringify(Object.assign({}, user, data));
    }
  }
  const ajaxTimeOut = 1000 * 60 * 3;
  function sync(url, data, option, config, type) {
    const xhr = setXhr(url, type, false);
    try {
      xhr.send();
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('同步请求成功，响应内容：', xhr.responseText);
      }
      else {
        throw new Error(`同步请求失败，状态码：${xhr.status}`);
      }
    }
    catch (e) {
      console.error('请求过程中发生错误：', e);
    }
  }
  function setXhr(url, type, sync) {
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, sync);
    xhr.open(type, url, sync);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.timeout = ajaxTimeOut;
    return xhr;
  }
  function async(url, data, option, config, type) {
    return new Promise((resolve, reject) => {
      const xhr = setXhr(url, type, true);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        }
        else {
          resolve(new Error(`异步请求失败，状态码：${xhr.status}`));
        }
      };
      xhr.onerror = () => {
        reject(new Error('异步请求失败，网络错误'));
      };
      xhr.send();
    });
  }
  // 异步
  function getAjaxSync(url, data, option = {}, config = {}) {
    return async(url, data, option, config, 'GET');
  }
  // 异步
  function commonQueryAsyncHttppost_callback(url, data, option = {}, config = {}) {
    return async(url, ajaxPostData(data, option, config), option, config, 'POST');
  }
  // 同步
  function getAjax(url, data, option = {}, config = {}) {
    return sync(url, data, option, config, 'GET');
  }
  // 同步
  function commonHttppost(url, data, option = {}, config = {}) {
    return sync(url, ajaxPostData(data, option, config), option, config, 'POST');
  }
  const Class = function () {
    that = this;
    if (layui) {
      layui.use(['layer']);
    }
  };
  Class.prototype = { commonHttppost, commonQueryAsyncHttppost_callback, getAjax, getAjaxSync };
  w.jtUtil = new Class();
})(window, document);
