// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import LayOut from './components/layout'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/vuex'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { LayOut },
  template: '<LayOut/>'
})
