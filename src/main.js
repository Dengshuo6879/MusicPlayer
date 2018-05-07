import 'babel-polyfill'         //对ES6的API做转义
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'        //解决移动端点击300ms延迟的问题
import VueLazyLoad from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
