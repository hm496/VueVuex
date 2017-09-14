const stringify = JSON.stringify;

export function qs(obj, flag = true) {
  let objKeys = Object.keys(obj);
  let res = "";
  for (let i = 0; i < objKeys.length; i++) {
    let key = objKeys[i];
    let str = obj[key].toString();
    if (flag) {
      if (str.length) {
        res = res.concat(key, "=", str, "&");
      }
    } else {
      res = res.concat(key, "=", str, "&");
    }
  }
  return res.slice(0, -1);
}