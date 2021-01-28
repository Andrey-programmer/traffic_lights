import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  components: { App },
}).$mount('#app')
