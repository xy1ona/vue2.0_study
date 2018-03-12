// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
let store = new Vuex.Store({
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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
