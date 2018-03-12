import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    totalPrice: 0
  },
  getters: {
    getTotal (state) {
      return state.totalPrice
    }
  },
//mutations 同步操作
  mutations: {
    increment (state, price) {
      state.totalPrice += price;
    },
    decrement (state, price) {
      state.totalPrice -= price;
    }
  },
//actions异步请求-api
  actions: {
    increase (context, price) {
// api(id, function () {
//
// })
      context.commit('increment', price)
    }
  }
})
