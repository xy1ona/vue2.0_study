import Vue from 'vue'
const state = {
  orderList: [],
  params: {}
}

const getters = {
  getOrderList(state) {
    return state.orderList;
  }
}

const actions = {
  fetchOrderList ({commit, state}) {
    Vue.http.post('/api/getOrderList',state.params)
      .then((res) => {
      commit('updateOrderList',res.data.data.list)
      },(err)=> {

      })
  }
}

const  mutations = {
  updateOrderList (state, payload) {
    state.orderList = payload
    console.log(state.orderList)
  },
  updateParams (state, {key, val}) {
    state.params[key] = val;
    console.log(state.params)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
