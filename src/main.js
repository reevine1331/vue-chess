import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

require('./styles/app.css')

new Vue({
  router, //追加
  render: h => h(App)
}).$mount('#app')