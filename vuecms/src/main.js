// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入mintUI组件
import Mint from 'mint-ui'
//导入vue-resource
import VueResource from 'vue-resource'
//导入过滤器组件
import './filters/datefilter'

//引入mintUI的css文件
import 'mint-ui/lib/style.css'

//引入mui的css文件
import "../lib/mui/css/mui.css"
import "../lib/mui/css/icons-extra.css"

//引入vuex
import Vuex from 'vuex'

// 导入vuex store对象
import store from "./store/store"

//将导入的组件加载都Vue原型上？
Vue.use(Mint)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
