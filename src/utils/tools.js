const stringify = JSON.stringify;

//简单对象转query字符串
/*
{a:1,b:2}
转为
"a=1&b=2"
* */
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

//合并vuexModule的子module
/*
多个
{
  state,
  getters,
  actions,
  mutations
}
合并成一个
*/
export function combineVuex(...arg) {
  let res = {
    state: {},
    getters: {},
    actions: {},
    mutations: {}
  };

  for (let i = 0; i < arg.length; i++) {
    let module = arg[i];
    if (typeof module.state === 'object') {
      Object.assign(res.state, module.state);
    }
    if (typeof module.getters === 'object') {
      Object.assign(res.getters, module.getters);
    }
    if (typeof module.actions === 'object') {
      Object.assign(res.actions, module.actions);
    }
    if (typeof module.mutations === 'object') {
      Object.assign(res.mutations, module.mutations);
    }
  }

  return res;
}