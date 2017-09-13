import Vuex from 'vuex'
//根节点store
import root_store from './root_store'
//各个module的store
import cart from './modules/cart'
import products from './modules/products'
//插件
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

console.log({
  ...root_store,
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

const store = new Vuex.Store({
  ...root_store,
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

//webpack热重载,开发配置
if (module.hot) {
  // 使 actions 和 mutations 成为可热重载模块
  module.hot.accept(['./root_store', './modules/cart', './modules/products',], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
    const root_store = require('./root_store').default;
    const cart = require('./modules/cart').default;
    const products = require('./modules/products').default;
    // 加载新模块
    store.hotUpdate({
      ...root_store,
      modules: {
        cart,
        products
      }
    })
  })
}

export default store;