// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router.js'
import './lib/mui/css/mui.css'
import './lib/mint/header/style.css'
import './lib/mint/swipe/style.css'

import {Header, Swipe, SwipeItem} from 'mint-ui'

// Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: c => c(app),
  router // 挂在路由对象到vue实例上
})
