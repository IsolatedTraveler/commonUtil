(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  function debounce1(fun, delay) {
    let time = null;
    return function () {
      let args = arguments;
      clearTimeout(time);
      time = setTimeout(() => {
        fun.apply(that || this, args);
      }, delay);
    };
  }
    const jkUrl = '/magicJq/YY13/02/10/s-dzjkkxx';
  var readJkkInfoResolve, readJkkInfoReject;
  function setJkkInfoPromise(resolve, reject) {
    readJkkInfoResolve = resolve;
    readJkkInfoReject = reject;
  }
  var singlePopElem, singlePopContentElem, singlePopTitleElem, singlePopMsgElem, singlePopBtnElem, singlePopResolve;
  function setSinglePromise(resolve, reject) {
    singlePopResolve = resolve;
  }
  function setSinglePopElem() {
    if (!singlePopElem) {
      singlePopElem = d.createElement('div');
      singlePopElem.style.position = 'absolute';
      singlePopElem.style.right = '0px';
      singlePopElem.style.left = '0px';
      singlePopElem.style.top = '0px';
      singlePopElem.style.bottom = '0px';
      singlePopElem.style.alignItems = 'center';
      singlePopElem.style.justifyContent = 'center';
      singlePopElem.style.zIndex = '99999';
      d.body.append(singlePopElem);
    }
    singlePopElem.style.display = 'flex';
    singlePopElem.innerHTML = '';
  }
  function setSinglePopContentElem() {
    if (!singlePopContentElem) {
      singlePopContentElem = d.createElement('div');
      singlePopContentElem.style.background = '#fff';
      singlePopContentElem.style.color = '#333';
      singlePopContentElem.style.border = '1px solid #dcdcdc';
      singlePopContentElem.append(singlePopTitleElem);
      singlePopContentElem.append(singlePopMsgElem);
      singlePopContentElem.append(singlePopBtnElem);
    }
  }
  function setSinglePopTitleElem(title = '') {
    if (!singlePopTitleElem) {
      singlePopTitleElem = d.createElement('div');
      singlePopTitleElem.style.borderBottom = '1px solid #dcdcdc';
      singlePopTitleElem.style.padding = '8px';
      singlePopTitleElem.style.fontSize = '16px';
    }
    singlePopTitleElem.innerHTML = title;
    singlePopTitleElem.style.display = title ? 'block' : 'none';
  }
  function setSinglePopMsgElem(msg = '') {
    if (!singlePopMsgElem) {
      singlePopMsgElem = d.createElement('div');
      singlePopMsgElem.style.padding = '8px';
    }
    singlePopMsgElem.innerHTML = msg;
  }
  function setSinglePopBtnElem(btn = []) {
    if (!singlePopBtnElem) {
      singlePopBtnElem = d.createElement('div');
      singlePopBtnElem.style.borderTop = '1px solid #dcdcdc';
      singlePopBtnElem.style.padding = '5px';
      singlePopBtnElem.style.justifyContent = 'flex-end';
      singlePopBtnElem.style.fontSize = '14px';
    }
    singlePopBtnElem.innerHTML = btn.map((it, i) => `<button>${it}</button>`).join('');
    singlePopBtnElem.querySelectorAll('button').forEach((elem, i) => {
      elem.addEventListener('click', event => {
        singlePopResolve({ event, code: i });
      });
    });
    singlePopBtnElem.style.display = btn.length ? 'flex' : 'none';
  }
  function layer(elem) {
    setSinglePopElem();
    singlePopElem.append(elem);
    return new Promise(setSinglePromise).catch(layerClose);
  }
  function layerClose() {
    singlePopElem.style.display = 'none';
  }
  function layerContent(title, msg, btn = []) {
    setSinglePopTitleElem(title);
    setSinglePopMsgElem(msg);
    setSinglePopBtnElem(btn);
    setSinglePopContentElem();
  }
  function scanCodeDealy(elem) {
    singlePopResolve({ data: elem.value, code: -1 });
  }
  function scanCode(msg) {
    layerContent('扫码', `<p style="margin: 0; padding: 5px 0;font-size:14px;">${msg}</p><input style="width: ${msg.length + 2}em;font-size:14px"/>`, ['取消']);
    setTimeout(() => {
      singlePopMsgElem.querySelectorAll('input').forEach((elem) => {
        elem.focus();
        var delayScan = debounce1(scanCodeDealy, 500);
        elem.addEventListener('keypress', event => {
          if (event.code === 'Enter') {
            singlePopResolve({ data: elem.value, code: -1 });
          }
          delayScan(elem);
        });
      });
    }, 10);
    return layer(singlePopContentElem);
  }
  function readJkkInfoByMagic(rhcv_id) {
    return w.jtSync.commonQueryAsyncHttppost_callback(jkUrl, { rhcv_id }).catch((res) => {
      readJkkInfoReject(res);
      return Promise.reject();
    }).then(({ code, data, message }) => {
      if (code == 1) {
        var birthday = data.birthday || '';
        if (birthday) {
          birthday = [birthday.substring(0, birthday.length - 4), birthday.substr(-4, 2), birthday.substr(-2)];
          if (birthday[0].length == 2) {
            birthday[0] = '19' + birthday[0];
          }
          birthday = birthday.join('/');
        }
        readJkkInfoResolve({
          bsh: data.id_card_value,
          bslx: data.id_card_type_code,
          xm: data.name,
          sfzh: data.id_card_type_code == '01' ? data.id_card_value : '',
          sex: data.gender_code == '1' ? '1-男' : data.gender_code == '2' ? '2-女' : '',
          lxdh: data.mobilephone || data.contact_phone || '',
          birthday: birthday,
          jtqhdm: '',
          jtqhmc: ''
        });
      }
      else {
        return Promise.reject(new Error(message));
      }
    });
  }
  function enterJkkNumber() {
    scanCode('请扫电子健康卡二维码获取患者基本信息：').then(({ code, data }) => {
      if (code == -1) {
        readJkkInfoByMagic(data).then(() => {
          layerClose();
        }).catch(res => {
          layerClose();
          readJkkInfoReject(res);
        });
      }
      else {
        layerClose();
        readJkkInfoReject(new Error('用户取消扫码操作'));
      }
    }).catch(readJkkInfoReject);
  }
  function readJkkInfo() {
    return new Promise((resolve, reject) => {
      setJkkInfoPromise(resolve, reject);
      enterJkkNumber();
    });
  }
  const Class = function () {
    that = this;
  };
  Class.prototype = { readJkkInfo };
  w.hisYpglPdgl = new Class()
})(window, document);
