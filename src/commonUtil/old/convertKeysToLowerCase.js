
export function convertKeysToLowerCase(obj) {
  try {
    if (!obj || typeof obj !== "object") return null;
    if (obj instanceof Array) {
      for (var i = 0; i < obj.length; i++) {
        that.convertKeysToLowerCase(obj[i]);
      }
    } else {
      for (var key in obj) {
        that.convertKeysToLowerCase(obj[key]);
        if (key.toLowerCase() != key) {
          obj[key.toLowerCase()] = obj[key];
          delete obj[key];
        }
      }
    }
    return obj;
  } catch (e) {
    JsErrorTrace(e);
  }
}
