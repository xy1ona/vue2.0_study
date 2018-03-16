import Vue from 'vue'
import Vuex from 'vuex'
import Count from './modules/count.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Count,
  },
})
