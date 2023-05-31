/* eslint-disable no-undef */
(function (w, d) {
  // 咸鱼之王游戏
  const keys = [10, 20, 30, 40, 80, 100, 70, 50, 99],
    vals = [10, 10, 20, 50, 50, 50, 20, 50, -1],
    dbzf = 8000,
    dcdbsxjf = 2000,
    dcdbjf = 100,
    len = keys.length,
    gbjfb = 1.8;
  var dcjfh = 0,
    bl = 0,
    kbcs = {
      mzbx: 0, qtbx: 0, hjbx: 0, bjbx: 0, dqjf: 0, dqzf: 0, dqdbf: 0
    };
  function calcDbxx(zf, bxzf) {
    return { dbcs: Math.floor(zf / dbzf), sydbjf: zf % dbzf, bxzf, zf }
  }
  function getZf() {
    var { mzbx, qtbx, hjbx, bjbx, dqjf, dqzf } = kbcs,
      zf = mzbx + qtbx * 10 + hjbx * 20 + bjbx * 50, i = 0,
      ljf = zf + dqjf, bxzf = zf;
    if (dqzf > 0) {
      i = keys.indexOf(dqzf);
    }
    while (ljf > keys[i]) {
      for (; len > i && ljf > keys[i]; i++) {
        if (vals[i] > 0) {
          zf += vals[i];
        }
        ljf = ljf - keys[i] + vals[i];
      }
      if (len <= i) {
        i = 0;
      }
    }
    return { zf, bxzf }
  }
  function getDcjfh() {
    dcjfh = dcjfh || keys.reduce((a, b) => a + b) - vals.filter(it => it < 0).reduce((a, b) => a + b);
    return dcjfh
  }
  function val(key, v) {
    if (v === undefined || v === null) {
      return kbcs[key]
    } else {
      kbcs[key] = v || 0;
    }
  }
  function setMzbx(v) {
    return val('mzbx', v)
  }
  function setQtbx(v) {
    return val('qtbx', v)
  }
  function setHjbx(v) {
    return val('hjbx', v)
  }
  function setBjbx(v) {
    return val('bjbx', v)
  }
  function setDqjf(v) {
    return val('dqjf', v)
  }
  function setDqzf(v) {
    return val('dqzf', v)
  }
  function setDqdbf(v) {
    return val('dqdbf', v)
  }
  function setCs(mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf) {
    setMzbx(mzbx);
    setQtbx(qtbx);
    setHjbx(hjbx);
    setBjbx(bjbx);
    setDqjf(dqjf);
    setDqzf(dqzf);
    setDqdbf(dqdbf);
  }
  function setCsObj({ mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf } = {}) {
    setCs(mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf);
  }
  function reSetCs(mzbx1, qtbx1, hjbx1, bjbx1, dqjf1, dqzf1, dqdbf1) {
    var old = { ...kbcs };
    return new Promise((resolve, reject) => {
      setCs(mzbx1, qtbx1, hjbx1, bjbx1, dqjf1, dqzf1, dqdbf1);
      resolve(old);
    })
  }
  function addBx(val) {
    if (val == 10) {
      setQtbx(kbcs.qtbx + 1);
    } else if (val == 20) {
      setHjbx(kbcs.hjbx + 1);
    } else if (val == 50) {
      setBjbx(kbcs.bjbx + 1);
    }
  }
  function getDbxx() {
    var bxzf = getZf().zf, zf = bxzf + kbcs.dqdbf;
    return calcDbxx(zf, bxzf)
  }
  function getJfBl() {
    if (!bl) {
      getDcjfh();
      return reSetCs(dcjfh).then((res) => {
        bl = getZf().zf / dcjfh;
        setCsObj(res);
        return bl
      })
    }
    return Promise.resolve(bl)
  }
  function calcBxs(sydbjf, cs, gdsy) {
    return reSetCs(null, kbcs.qtbx + gdsy / 10).then(old => {
      sydbjf = Math.floor(sydbjf / bl / 10) * 10;
      setMzbx(sydbjf + old.mzbx);
      var obj = getDbxx();
      while (obj.dbcs < cs) {
        sydbjf += 10;
        setMzbx(sydbjf);
        obj = getDbxx();
      }
      setCsObj(old);
      sydbjf -= old.mzbx;
      var tggq = Math.ceil(sydbjf / gbjfb / 10) * 10;
      return { xybx: sydbjf, tggq: tggq > sydbjf ? sydbjf : tggq, sydbjf: obj.sydbjf }
    })
  }
  function addDqjf(v) {
    var dqjf = kbcs.dqjf + v;
    if (dqjf >= kbcs.dqzf) {
      dqjf = dqjf % kbcs.dqzf;
      var index = keys.indexOf(kbcs.dqzf);
      var val = vals[index];
      addBx(val);
      index = (index + 1) % len;
      setDqzf(keys[index]);
    }
    setDqjf(dqjf);
    setDqdbf(kbcs.dqdbf + v);
  }
  function getSyBxs(cs = 1, ts = 0, hssy = 180) {
    var { dbcs, sydbjf } = getDbxx(),
      jljf = (cs * dbzf / dcdbsxjf - Math.floor(kbcs.dqdbf / dcdbsxjf) - 1) * dcdbjf,
      gdsy = hssy * ts + jljf;
    if (dbcs < cs) {
      return getJfBl().then(() => {
        return calcBxs(dbzf - sydbjf, cs, gdsy)
      })
    } else {
      return Promise.resolve(calcBxs(-sydbjf, cs, gdsy))
    }
  }
  function getCs() {
    var {mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf} = kbcs;
    console.log([mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf].join(', '));
  }
  const Class = function(obj) {
  };
  Class.prototype = {addDqjf,getDbxx,getSyBxs,getCs,setCs,setMzbx,setQtbx,setHjbx,setBjbx,setDqjf,setDqzf,setDqdbf}
  w.yxXyzw = new Class()
})(window, document);
yxXyzw.setCs(0, 230, 15, 16, 37, 40, 6790)
yxXyzw.getSyBxs(2, 2).then(obj => console.log(obj))
