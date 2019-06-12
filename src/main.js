// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/style/border.css'
import './assets/style/reset.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'
import './mock/index'
// 解决移动端300ms延迟问题
fastClick.attach(document.body)

Vue.use(Vuex)
Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
