import Vue from 'vue';

Vue.directive('input', {
  inserted: function (el, binding, vnode) {
    let vm = vnode.context;
    let method = vm[binding.expression];
    if (typeof method === "function") {
      let callback = function () {
        method(el.value, el);
      }
      let doc = document;
      if (doc.addEventListener) {
        el.addEventListener('input', callback, false)
        //IE9 使用 selectionchange fix
        if (doc.documentMode === 9) {
          let selectionchange = function () {
            callback();
          }
          el.addEventListener('focus', function () {
            doc.addEventListener('selectionchange', selectionchange, false);
          }, false)
          el.addEventListener('blur', function () {
            doc.removeEventListener('selectionchange', selectionchange, false);
          }, false)
        }
      }
    }
  }
});