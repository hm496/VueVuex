import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import root_store from './root_store'

import cart from './modules/cart'
import products from './modules/products'
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

const vuexStore = new Vuex.Store({
  ...root_store,
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export default vuexStore;