(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  const contentType = 'application/json; charset=utf-8', XHR_JQ_CODE = 101 // 服务器返回的需要鉴权的标志（鉴权失效，第三方鉴权等情况导致鉴权失败）
  , XHR_JQ_URL = '/magic/oauth/login', // 服务器鉴权信息
  DEFAULT_AUTH_USER = {
    zh: '',
    mm: ''
  };
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
    let url = location.href;
    return appBaseUrl = (url.split(urlPattern)[0] + '/').replace(/\/+/g, '/');
  }
  /**
  * @description 获取当前设置的应用程序基础URL。如果尚未设置，此函数会触发应用程序基础URL的初始化过程。
  * @returns {string} 应用程序的基础URL。
  */
  function getAppBaseUrl() {
    return setPageTemp(appBaseUrl, setAppBaseUrl);
  }
  // 获取应用程序名
  const webName = `/${getAppBaseUrl().split('/').filter(Boolean)}/`;
  /**
  * @description 提供一种便捷的方式来读取、写入或删除浏览器sessionStorage中的数据，同时支持对存储键名进行前缀处理，增强数据管理的灵活性和区分度
  *
  * @param {string} name - 用于sessionStorage的键名。
  * @param {any} [val]  - 如果省略或为undefined，函数将尝试获取指定键名的值。
  *                     - 如果为null，函数将删除该键名对应的sessionStorage项。
  *                     - 否则，该值将被设置为指定键名在sessionStorage中的值。
  * @returns {any} - 如果操作是获取值，则返回读取到的值；
  *                如果是设置或删除操作，则返回传入的val。
  */
  function session(name, val) {
    const name1 = webName + name;
    if (val === undefined) {
      return JSON.parse(sessionStorage.getItem(name1) || sessionStorage.getItem(name) || 'null');
    }
    else if (val === null) {
      sessionStorage.removeItem(name);
      sessionStorage.removeItem(name1);
    }
    else {
      sessionStorage.setItem(name1, JSON.stringify(val));
    }
    return val;
  }
  var Authorization = ''; // 初始化鉴权令牌变量
  /**
  * @description 获取或刷新鉴权令牌的函数。
  *
  * 此函数尝试从客户端会话存储中检索用户信息，并使用这些信息通过AJAX请求向服务器获取新的鉴权令牌。
  * 如果过程中出现任何异常，函数会默认设置鉴权状态为无需鉴权（`true`），以保证系统能够继续运行，尽管可能需要进一步的人工干预或错误处理。
  *
  * 主要步骤包括：
  * 1. **用户信息检索**: 从会话存储中查找`magicUser`信息，如果不存在，则尝试从`magic`对象中提取用户信息，最后使用默认认证用户信息（`DEFAULT_AUTH_USER`）作为备选。
  * 2. **发送鉴权请求**: 使用全局的XHR工具函数`commonHttppost`向预定义的URL（`XHR_JQ_URL`）发送POST请求，携带用户信息，并设置特定选项以控制请求行为（如不获取用户信息、不包装响应等）。
  * 3. **处理响应与异常**: 如果请求成功，从响应的`data`中提取`accessToken`并更新全局鉴权变量`Authorization`。如果响应无效或发生任何异常，将鉴权状态设置为`true`，意味着放弃鉴权要求。
  */
  function getAuthorization() {
    try {
      const user = session('magicUser') || (session('magic') || {}).user || DEFAULT_AUTH_USER, res = commonHttppost(XHR_JQ_URL, user, { isNotGetUser: true, isNotWrapped: true }) || {};
      Authorization = res.data.accessToken || true;
    }
    catch (e) {
      Authorization = true; // 在异常情况下设置为true，表示无需鉴权
    }
  }
  /**
  * @description 检查并设置AJAX请求的鉴权信息。
  *
  * @param {AjaxRequestConfig} config - AJAX请求的配置对象，将会被修改以添加或更新鉴权头信息。
  * @param {AjaxRequestOption} option - AJAX请求的选项对象，用于控制是否需要进行鉴权检查。
  * @param {string} url - 当前请求的URL，用于判断是否需要跳过特定的内部处理。
  * @param {boolean} [reset=false] - 是否重置鉴权信息，如果为真，将强制重新获取鉴权令牌。
  *
  * 此函数主要做了以下几件事：
  * 1. **跳过特定URL**: 如果请求的URL与`XHR_JQ_URL`相同，则直接返回，不做鉴权处理。
  * 2. **鉴权逻辑控制**: 当需要重置鉴权信息或当前鉴权令牌未设置时，关闭此次请求的鉴权检查，并调用`getAuthorization`方法获取新的鉴权令牌。
  * 3. **设置鉴权头**: 更新请求配置的`headers`属性，加入`accessToken`。如果鉴权令牌有效，则设置其值；如果为`true`（表示无需鉴权或鉴权失败），则不设置此头信息。
  */
  function checkAuth(config, option, url, reset = false) {
    if (url === XHR_JQ_URL) {
      return;
    }
    if (reset || !Authorization) {
      option.isCheck = false;
      getAuthorization();
    }
    config.headers = config.headers || {};
    config.headers.accessToken = Authorization === true ? undefined : Authorization;
  }
  function errFormat(message, code = -1) {
    return { code, message, data: {} };
  }
  var user // 用户信息
  , configData; // 应用配置
  /**
  * @description
  * @author 何波
  * @date 2024-04-29 10:01:38
  * @param {}
  */
  function setUser() {
    return user = session('userinfo');
  }
  /**
  * @description 同步获取应用的配置信息。
  *
  * 函数执行过程：
  * 1. 向'/public/data/config.json'发起GET请求，该请求包含一个查询参数v，其值为当前时间的时间戳，用以防止浏览器缓存旧的配置信息。
  * 2. 请求配置的同时，传入一个配置对象，指定了错误提示信息前缀、请求的URL类型为'origin'（通常意味着直接使用当前页面的协议和主机），
  *    以及标志isNotGetUser为true，可能用于在请求中指示不需要附加用户身份验证信息或其他特定于用户的处理逻辑。
  * 3. 调用全局的getAjax方法来发起请求，此方法应为外部定义的一个处理Ajax请求的函数或类方法。
  * 4. 函数返回configData的设置操作，虽然实际上此返回值在异步操作的上下文中可能不会被直接使用，因为getAjax方法通常是异步的。
  */
  function setConfigData() {
    return configData = getAjax('/public/data/config.json', { v: new Date().getTime() }, { msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true });
  }
  /**
  * @description 获取配置信息。如果尚未设置，此函数会触发应用程序配置信息的初始化过程。
  * 然后根据提供的`key`返回配置对象中的相应属性值。如果没有提供`key`，则直接返回整个配置对象。
  *
  * @param {string} [key=''] - 配置项的键名，可选，默认为空字符串。
  * @returns {any} 如果提供了`key`，返回对应的配置值；否则，返回整个配置对象。
  */
  function getConfig(key = '') {
    setPageTemp(configData, setConfigData);
    return key ? configData[key] : configData;
  }
  /**
  * @description 获取用户信息。如果尚未设置，此函数会触发应用程序用户信息的初始化过程。
  *
  * @returns {any}
  */
  function getUser() {
    setPageTemp(user, setUser);
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
  /**
  * @description 从给定的URL数组或单个URL字符串中，提取与当前页面起源匹配的首要URL。
  * 如果提供的是字符串且不为空，直接返回该字符串。
  * 若为数组，则遍历查找包含当前页面起源的URL，找到则返回；否则返回数组中的第一个URL。
  *
  * @param {string | string[]} urlsArray - 要检查的URL数组或单个URL字符串。
  * @returns {string} 与当前页面起源匹配的URL，或数组中的首个URL。
  */
  function extractPrimaryUrl(urlsArray) {
    if (typeof urlsArray === 'string')
      return urlsArray;
    for (var index = 0; index < urlsArray.length; index++) {
      if (urlsArray[index].includes(location.origin)) {
        return urlsArray[index];
      }
    }
    return urlsArray[0];
  }
  /**
  *  @description 设置服务端URL。此函数从应用程序配置中提取主要的服务端URL。
  * 首先通过`getConfig()`获取配置信息，然后从配置的`magicServer`属性中提取主要URL。
  * @returns {string} 设置后的服务端URL。
  */
  function setServerUrl() {
    return serverUrl = extractPrimaryUrl(getConfig().magicServer);
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
  /*
  * 处理 XMLHttpRequest 响应的函数。
  *
  * @param {XMLHttpRequest} xhr - XMLHttpRequest 实例，包含了从服务器返回的全部响应信息。
  * @returns {any | string} 返回解析后的数据对象（如果成功且响应为JSON格式），
  *                          原始响应文本（如果解析JSON失败），或者错误信息字符串（HTTP状态码非2xx时）。
  *
  * 函数首先检查HTTP响应状态码是否在200至299之间，这表示请求成功。
  * - 如果请求成功，尝试将响应体（responseText）解析为JSON对象。
  *   - 在解析前，设定数据对象的'message'字段为'message'或'msg'中的一个（如果存在），
  *     以兼容不同API的响应格式。
  *   - 同时，修正数据对象的'code'字段，如果其值为字符串'1'，则转换为数字1。
  *   - 解析成功则返回处理后的数据对象。
  *   - 如果解析JSON时发生错误，则直接返回响应体的原始文本。
  * - 如果请求失败（HTTP状态码不在200-299范围内），则调用外部的`errFormat`函数，
  *   使用`ajaxRerr`对象中相应状态码的错误信息，组合成错误字符串返回。
  *
  * 注意：此函数依赖于外部的`errFormat`函数和`ajaxRerr`对象的定义。
  */
  function dealXhrRes(xhr) {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        var data = JSON.parse(xhr.responseText);
        data.message = data.message || data.msg;
        data.code = data.code === '1' ? 1 : data.code;
        return data;
      }
      catch (e) {
        return xhr.responseText;
      }
    }
    else {
      return errFormat('请求失败：' + ajaxRerr[xhr.status]);
    }
  }
  /**
  * 初始化XMLHttpRequest对象并配置请求
  * @param {string} url - 请求URL
  * @param {string} type - 请求类型
  * @param {boolean} async - 是否异步请求
  * @returns {XMLHttpRequest} 配置好的XMLHttpRequest对象
  */
  function setXhr(url, type, { urlType, isCheck }, param, config, async, isRest) {
    if (isCheck && that.checkAuth) {
      that.checkAuth(config, url, isRest);
    }
    url = buildAbsoluteUrl(url, urlType);
    url = buildUrlWithQueryParams(param, url);
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, async);
    xhr.setRequestHeader('Content-Type', contentType);
    return xhr;
  }
  /**
  * @description 发送同步请求
  * @param {string} url - 请求地址
  * @param {*} data - 请求数据
  * @param {*} option - 请求选项
  * @param {*} config - 配置信息
  * @param {string} type - 请求方式
  */
  function sync(url, data = {}, param = {}, option = {}, config = {}, type, isRest = false) {
    try {
      const xhr = setXhr(url, type, option, param, config, false, isRest);
      const time = setTimeout(() => {
        xhr.abort();
      }, ajaxTimeOut);
      xhr.send(data);
      clearTimeout(time);
      const val = dealXhrRes(xhr);
      if (option.isCheck && val.code === XHR_JQ_CODE) {
        return sync(url, data, param, option, config, type, true);
      }
      return val;
    }
    catch (e) {
      return errFormat('请求过程中发生错误：' + (e.message || e));
    }
  }
  /**
  * 发起一个同步的HTTP GET请求。
  *
  * 此函数封装了发送GET请求的过程，允许附带查询数据。
  * 它结合了基础请求参数、请求数据处理，并根据提供的选项和配置自定义请求。
  *
  * @param {string} url - 目标API的URL。
  * @param {any} data - 需要附加到URL作为查询参数的数据。
  * @param {AjaxRequestOption} [option={}] - 自定义请求选项，默认为一个空对象。
  * @param {AjaxRequestConfig} [config={}] - 额外的请求配置，默认为一个空对象。
  *
  * @returns {any}
  */
  function getAjax(url, data, option = {}, config = {}) {
    return sync(url, option.param, data, option, config, 'GET');
  }
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
  function async(url, data = {}, param = {}, option = {}, config = {}, type, isRest = false) {
    return new Promise((resolve, reject) => {
      try {
        const xhr = setXhr(url, type, option, param, config, true, isRest);
        xhr.timeout = ajaxTimeOut;
        xhr.onload = () => {
          const val = dealXhrRes(xhr);
          if (option.isCheck && val.code === XHR_JQ_CODE) {
            resolve(async(url, data, param, option, config, type, true));
          }
          else
            resolve(val);
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
        return reject(errFormat('请求过程中发生错误：' + (e.message || e)));
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
  * @param {any} data - 需要发送的数据对象。
  * @param {AjaxRequestOption} [option={}] - 请求的可选配置对象，默认为空对象。
  * @param {AjaxRequestConfig} [config={}] - 通用的Ajax请求配置，默认为空对象。
  * @param {AjaxRequestType} [type='POST'] - 请求类型，默认为'POST'。
  *
  * @returns {string} 返回处理后的数据字符串，准备用于Ajax请求的发送。
  *
  * @description 功能描述：
  * 1. 检查`option.isCheck`是否为`false`，但此处漏写了对应的逻辑处理，可能是一个待完成的条件判断。
  * 2. 如果存在`that`对象且其具有`dealAjaxData`方法，则调用该方法处理数据，优先使用自定义逻辑。
  * 3. 若`option.isNotGetUser`不为`true`，则将全局的用户信息`getUser()`与`data`合并。
  * 4. 根据`option.isNotWrapped`决定数据是否需要额外包装。如果不包装（默认行为或明确指定不包装），直接将数据序列化为JSON字符串。
  *    否则，将数据放入一个带有"data"键的对象中再进行序列化，这种做法常见于需要在服务端解析特定格式的场景。
  */
  function dealRequestData(data, option = {}, config = {}, type = 'POST') {
    option.isCheck !== false;
    if (that && that.dealAjaxData) {
      return that.dealAjaxData(data, option, config, type);
    }
    if (!option.isNotGetUser) {
      const user = getUser();
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
    if (option.isNotWrapped) {
      return JSON.stringify(data);
    }
    return JSON.stringify({ data });
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
  * 并根据提供的选项和配置来定制请求
  */
  function asyncQueryPost(url, data, option = {}, config = {}) {
    return async(url, dealRequestData(data, option, config), option.param, option, config, 'POST');
  }
  /**
  * 发起一个同步的HTTP POST请求，适用于常见的查询操作。
  *
  * @param {string} url - 请求的目标URL。
  * @param {any} data - 需要发送到服务器的数据。
  * @param {AjaxRequestOption} [option={}] - 请求的附加选项，例如错误处理信息等，默认为空对象。
  * @param {AjaxRequestConfig} [config={}] - 配置选项，用于进一步定制请求行为，默认为空对象。
  *
  * @returns {any}
  *
  * @description
  * 此函数封装了HTTP POST请求的过程，通过组合基础请求参数、处理请求数据，
  * 并根据提供的选项和配置来定制请求
  */
  function commonHttppost(url, data, option = {}, config = {}) {
    return sync(url, dealRequestData(data, option, config), option.param, option, config, 'POST');
  }
  const Class = function () {
    that = this;
    if (w.layui) {
      layui.use(['layer']);
    }
  };
  Class.prototype = { asyncGetPost, asyncQueryPost, getAjax, commonHttppost, checkAuth };
  w.jtUtil = new Class();
})(window, document);
jtUtil.asyncQueryPost('/magic/jcgl/other/s-bjg', { bm: 'sqldy' }, { isNotGetUser: true })