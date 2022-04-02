import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

import './assets/css/font.css'
// 字体



Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
