(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  /**
  * 将相对URL转换为绝对URL。
  *
  * @param {string} relativeUrl - 需要转换的相对URL字符串。
  * @param {string | URL | Location} [base] - 可选的基础URL，用于解析相对路径。可以是字符串、URL对象或Location对象，默认为当前页面的URL。
  * @returns {string} 绝对化的URL字符串。
  *
  * @description
  * 该函数首先检查输入的相对URL是否已经是绝对URL（以'http://'或'https://'开头），如果是，则直接返回。
  * 接着，使用`getUrl`函数获取基础URL的信息。如果未提供基础URL，将使用当前页面的URL。
  * 然后，对相对URL进行处理，移除开头的"./"和尾部的"/"，并处理"../"以计算上溯层级。
  * 最后，将处理过的相对路径段与基础URL的路径段合并，生成绝对URL并返回。
  */
  function convertToAbsoluteUrl(relativeUrl, base) {
    // 如果relativeUrl已经是绝对URL，则直接返回
    if (/^http[s]*:\/\//i.test(relativeUrl)) {
      return relativeUrl;
    }
    const baseAddress = getUrl(base);
    // 分割基础URL的路径并过滤掉空字符串
    let pathParts = baseAddress.pathname.split('/').filter(Boolean);
    // 清理relativeUrl，移除开头的"./"和尾部的"/"
    relativeUrl = relativeUrl.replace(/^\.\//, '').replace(/\/$/, '');
    // 处理relativeUrl中的"../"，计算需要上溯的层数
    if (relativeUrl.startsWith('../')) {
      const levelUp = relativeUrl.split('/').filter(part => part === '..').length;
      // 根据上溯层数调整基础路径
      pathParts = pathParts.slice(0, -levelUp);
      // 移除relativeUrl中的"../"
      relativeUrl = relativeUrl.replace(/\.\.\//g, '');
    }
    // 合并处理后的路径段，生成完整的路径数组
    pathParts = pathParts.concat(relativeUrl.split('/').filter(Boolean));
    // 生成并返回绝对URL
    return baseAddress.origin + '/' + pathParts.join('/');
  }
  /**
  * @param {string | URL | Location} [relativeUrl] - 可选参数，可以是字符串、URL对象或Location对象。
  *   如果未提供，将默认使用当前页面的location。
  * @returns {URL | Location} 返回一个URL对象或Location对象。
  *
  * @description 获取或构建URL对象。
  * 该函数检查输入`relativeUrl`的类型，根据以下规则处理：
  * 1. 如果输入已经是URL对象或Location对象，直接返回该对象。
  * 2. 如果输入是字符串，尝试将其解析为URL对象。如果字符串格式正确，则返回新的URL对象；
  *    若格式错误，则在控制台打印错误信息（但当前实现中错误被吞没，无异常抛出）。
  * 3. 如果没有提供输入或输入无法处理，函数将返回当前页面的`location`对象作为默认。
  *
  * 注意：当字符串输入无法转换为URL对象时，当前实现仅记录错误日志而不抛出异常。
  *       在某些应用场景下，可能需要调整错误处理逻辑以适应特定需求。
  */
  function getUrl(relativeUrl) {
    if (relativeUrl instanceof URL || relativeUrl instanceof Location) {
      return relativeUrl;
    }
    if (typeof relativeUrl === 'string') {
      try {
        return new URL(relativeUrl);
      }
      catch (error) {
        // 如果字符串不是有效的URL格式，可以选择抛出错误或默认处理
        console.error('Invalid URL:', relativeUrl);
      }
    }
    return location;
  }
  /**
  * @description 编码URL参数值，确保特殊字符被安全地转换以便于URL传输。
  *
  * 如果值为对象，则先转换为JSON字符串再进行编码。对于非对象的值，直接进行编码。
  * 如果值为空（null或undefined），返回空字符串以避免在URL中生成无效的`key=`。
  *
  * @param {any} value - 需要编码的值，可以是基本类型、对象或null/undefined。
  * @returns {string} 编码后的值，适合作为URL的一部分。
  */
  function encodeUrlParamValue(value) {
    return value ? encodeURIComponent(typeof value === 'object' ? JSON.stringify(value) : value) : '';
  }
  function errFormat(message, code = -1) {
    return { code, message, data: {} };
  }
  /**
  * @description 设置临时页面数据或通过回调函数计算数据。
  * 函数的核心逻辑是：检查`val`是否已提供且有效；如果未提供，则通过调用`callBack`函数并传入
  * `param`来动态获取数据。这种方式允许在数据可能已知或需要按需计算的场景下灵活运用。
  *
  * @param {any} val - 期望设置的值，可以是任意类型
  * @param {Function} callBack - 一个函数类型的参数，当`val`未提供或无效时会被调用。此回调应当返回一个值，用于替代`val`。回调函数接收一个参数`param`。
  * @param {any} [param=undefined] - 可选参数，用于传递给`callBack`函数。默认值为`undefined`，可根据需要指定。
  * @returns {any} - 返回最终设置的值，无论是直接提供的`val`还是通过回调函数计算得到的值。
  */
  function setPageTemp(val, callBack, param = undefined) {
    return val ? val : callBack(param);
  }
  var user;
  function setUser() {
    return user = {};
  }
  function getUser() {
    setPageTemp(user, setUser);
  }
  // 匹配特定URL模式的正则表达式
  const urlPattern = /\/webs\/|\/public\/|\/public21\/|\/public23\/|\/lib\/|\/lib21\/|\/lib23\/|\/.+\[^\/].js|\/[^/]+\.html/;
  var appBaseUrl // 应用基础URL
  , serverUrl; // 服务端URL
  /**
  *  @description 设置应用程序的基础URL。
  * 此函数从当前窗口的location.href中提取协议、域名和端口部分，
  * 然后确保URL以单个斜杠结尾。该URL用于作为应用内其他相对URL的基准。
  * @returns {string} 应用程序的基础URL。
  */
  function setAppBaseUrl() {
    let url = window.location.href;
    return appBaseUrl = (url.split(urlPattern)[0] + '/').replace(/\/+/g, '/');
  }
  /**
  * @description 获取当前设置的应用程序基础URL。如果尚未设置，此函数会触发应用程序基础URL的初始化过程。
  * @returns {string} 应用程序的基础URL。
  */
  function getAppBaseUrl() {
    return setPageTemp(appBaseUrl, setAppBaseUrl);
  }
  /**
  * @description 获取服务端URL。如果尚未设置，此函数会触发服务端URL的初始化过程。
  * @returns {string} 当前设置的服务端URL。
  */
  function getServerUrl() {
    return setPageTemp(serverUrl, setServerUrl);
  }
  /**
  * @description 根据URL类型，生成对应的绝对URL。
  * @param {string} targetUrl - 目标相对或绝对URL。
  * @param {'origin'} urlType - URL的构建基准类型，'origin'表示基于应用基础URL，默认表示基于服务端URL。
  * @returns {string} 完整的绝对URL。
  */
  function buildAbsoluteUrl(targetUrl, urlType) {
    if (/^http/.test(targetUrl)) {
      return targetUrl;
    }
    else if (urlType === 'origin') {
      return convertToAbsoluteUrl(targetUrl, getAppBaseUrl());
    }
    else {
      return convertToAbsoluteUrl(targetUrl, getServerUrl());
    }
  }
  /**
  * @description 将一个对象转换为URL查询字符串。
  * 此函数接收一个对象，其中的每个键值对将转换为形如`key=value`的字符串，
  * 所有键值对通过`&`连接，构成URL的查询字符串部分。
  *
  * @param {Object} obj - 需要转换的对象，键值对的值可以是基本类型或可被JSON化的对象。
  * @returns {string} 返回生成的URL查询字符串。
  */
  function convertObjectToQueryString(obj) {
    return Object.entries(obj).map(([key, value]) => {
      return `${key}=${encodeUrlParamValue(value)}`;
    }).join('&');
  }
  /**
  * @description 根据传入的对象和可选的URL基础，生成包含查询参数的完整URL。
  *
  * 如果提供了URL（字符串或URL对象），该函数会将对象转换的查询参数追加到该URL。
  * 否则，它将仅使用对象生成查询字符串。
  *
  * @param {any} obj - 要转换为查询参数的对象。
  * @param {string | URL} [url=''] - 基础URL，可以是字符串或URL实例，默认为空字符串。
  * @returns {string} 完整的URL字符串，包含追加的查询参数。
  */
  function buildUrlWithQueryParams(obj, url = '') {
    return url ? appendParamsToUrl(obj, url) : convertObjectToQueryString(obj);
  }
  /**
  * @description 将对象中的参数追加到给定URL的查询字符串中。
  *
  * @param {any} obj - 包含查询参数的对象。
  * @param {string | URL} url - 要追加查询参数的URL基础，可以是字符串或URL实例。
  * @returns {string} 更新后的URL字符串，包含原有的和新追加的查询参数。
  */
  function appendParamsToUrl(obj, url) {
    const baseUrl = new URL(url);
    const searchParams = new URLSearchParams(baseUrl.search);
    Object.entries(obj).forEach(([key, value]) => {
      searchParams.set(key, encodeUrlParamValue(value));
    });
    baseUrl.search = searchParams.toString();
    return url.toString();
  }
  // 请求超时时间设置（3分钟）
  const ajaxTimeOut = 1000 * 60 * 3, ajaxRerr = {
    400: '客户端请求的语法错误，服务器无法理解请求',
    401: '请求要求用户进行身份认证',
    403: '服务器已接受客户端的请求，但是拒绝执行此请求。',
    404: '请求服务不存在',
    408: '请求超时',
    409: '请求的资源与服务器中的资源冲突',
    413: '请求内容过大，超出服务器允许的范围',
    415: '服务器无法处理请求附带的媒体格式',
    500: '服务器遇到了不知道如何处理的情况',
    502: '作为网关或代理工作的服务器从上游服务器收到了无效的响应',
    503: '服务器目前无法使用（由于超载或停机维护）',
    504: '作为网关或代理的服务器未能及时从上游服务器收到请求'
  };
  /**
  * 发起一个异步的HTTP请求（支持GET和POST）。
  *
  * 此函数封装了XMLHttpRequest的使用，提供了请求的发起、响应处理以及错误处理的统一接口。
  * 支持自定义请求参数、附加参数、请求配置以及超时设置，适用于多种网络请求场景。
  *
  * @param {string} url - 请求的目标URL。
  * @param {any} [data={}] - 请求发送的数据，对于GET请求将附加为查询参数，POST请求则作为请求体。
  * @param {any} [param={}] - 额外的请求参数，可用于拼接URL或作为其他配置。
  * @param {AjaxRequestOption} [option={}] - 请求的附加选项，比如URL类型、错误处理等。
  * @param {AjaxRequestConfig} [config={}] - 高级配置，可能包含认证信息、请求头等。
  * @param {'GET' | 'POST'} type - 请求方法，支持'GET'或'POST'。
  *
  * @returns {Promise<any>} 返回一个Promise，成功时携带响应数据，失败则抛出错误信息。
  */
  function async(url, data = {}, param = {}, option = {}, config = {}, type) {
    return new Promise((resolve, reject) => {
      try {
        url = buildAbsoluteUrl(url, option.urlType);
        url = buildUrlWithQueryParams(param, url);
        const xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.timeout = ajaxTimeOut;
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            return JSON.parse(xhr.responseText);
          }
          else {
            return errFormat('请求失败：' + ajaxRerr[xhr.status]);
          }
        };
        xhr.onerror = () => {
          reject(errFormat('请求失败：网络错误'));
        };
        xhr.ontimeout = () => {
          reject(errFormat('请求失败：网络连接超时'));
        };
        xhr.send(data);
      }
      catch (e) {
        return errFormat('请求过程中发生错误：' + (e.message || e));
      }
    });
  }
  /**
  * 发起一个异步的HTTP GET请求。
  *
  * 此函数封装了发送GET请求的过程，允许附带查询数据。
  * 它结合了基础请求参数、请求数据处理，并根据提供的选项和配置自定义请求。
  *
  * @param {string} url - 目标API的URL。
  * @param {any} data - 需要附加到URL作为查询参数的数据。
  * @param {AjaxRequestOption} [option={}] - 自定义请求选项，默认为一个空对象。
  * @param {AjaxRequestConfig} [config={}] - 额外的请求配置，默认为一个空对象。
  *
  * @returns {Promise<any>} 返回一个包含响应数据的Promise对象。
  */
  function asyncGetPost(url, data, option = {}, config = {}) {
    return async(url, option.param, data, option, config, 'GET');
  }
  /**
  * @param {any} data - 需要发送的基础数据对象，可以包含任何类型的数据。
  * @param {AjaxRequestOption} [option={}] - 请求的附加选项对象，用于进一步配置请求，如自定义头信息等。
  * @param {AjaxRequestConfig} [config={}] - 请求的配置对象，可能包含认证信息、超时设置等高级配置。
  * @param {AjaxRequestType} [type='POST'] - 请求类型，默认为POST，可选值有'GET', 'POST', 'PUT', 'DELETE'等。
  *
  * @returns {string} - 返回处理后的数据字符串，如果是默认处理逻辑，则返回包含用户信息与请求数据的JSON字符串。
  *
  * @description 处理Ajax请求的数据预处理逻辑。
  * - 如果存在`that.dealAjaxData`方法，则调用此方法处理数据，该方法应由外部实现并返回处理后的数据。
  * - 若无上述方法，则默认行为是将当前用户的登录信息（通过`getUser()`获取）与`data`合并，
  *   并将合并后的对象转换为JSON字符串，适用于大多数需要携带用户身份信息的请求场景。
  */
  function dealRequestData(data, option = {}, config = {}, type = 'POST') {
    if (that && that.dealAjaxData) {
      return that.dealAjaxData(data, option, config, type);
    }
    else {
      return JSON.stringify(Object.assign({}, getUser(), data));
    }
  }
  /**
  * 发起一个异步的HTTP POST请求，适用于常见的查询操作。
  *
  * @param {string} url - 请求的目标URL。
  * @param {any} data - 需要发送到服务器的数据。
  * @param {AjaxRequestOption} [option={}] - 请求的附加选项，例如错误处理信息等，默认为空对象。
  * @param {AjaxRequestConfig} [config={}] - 配置选项，用于进一步定制请求行为，默认为空对象。
  *
  * @returns {Promise<any>} 返回一个Promise，代表异步操作的结果。
  *
  * @description
  * 此函数封装了HTTP POST请求的过程，通过组合基础请求参数、处理请求数据，
  * 并根据提供的选项和配置来定制请求。它内部调用了`async`函数（未在此代码段中定义），
  * 该函数应负责实际发起网络请求并处理响应。`dealRequestData`函数（同样未在此定义）
  * 用于处理请求数据，可能是为了序列化或其他预处理步骤。
  *
  * 示例用法：
  * asyncQueryPost('/api/data', { query: 'value' })
  *   .then(response => console.log(response))
  *   .catch(error => console.error('请求失败:', error));
  */
  function asyncQueryPost(url, data, option = {}, config = {}) {
    return async(url, dealRequestData(data, option, config), option.param, option, config, 'POST');
  }
  const Class = function () {
    that = this;
    if (layui) {
      layui.use(['layer']);
    }
  };
  Class.prototype = { asyncGetPost, asyncQueryPost };
  w.jtUtil = new Class();
})(window, document);
// jtUtil.commonHttppost('/magic/jcgl/other/s-bjg', { bm: 'sqldy' }, { isNotGetUser: true })