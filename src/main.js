import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from "./store";

//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 公共css文件
import './assets/css/base.css'

// 格式化时间
import moment from 'moment'
Vue.prototype.$moment = moment

// 配置全局过滤器
Vue.filter('fmtdate', (v) => {
  return moment(v).format('YYYY-MM-DD')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
