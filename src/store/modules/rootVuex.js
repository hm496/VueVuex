import * as types from './mutation_types'
// state
const state = {};
// getters
const getters = {
  cartProducts: state => {
    return state.cart.added.map(({ id, quantity }) => {
      const product = state.products.all.find(p => p.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  }
};
// actions
const actions = {
  addToCart: ({ commit }, product) => {
    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }
  }
}
// mutations
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
}