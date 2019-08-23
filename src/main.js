// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App.vue'
import './lib/mui/css/mui.css'
import './lib/mint/header/style.css'

import { Header } from 'mint-ui'

// Vue.config.productionTip = false

Vue.component(Header.name, Header)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: c => c(app)
})
