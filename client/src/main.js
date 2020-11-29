import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./router"
import axios from 'axios'

Vue.use(BootstrapVue)

Vue.prototype.$http = axios

Vue.prototype.serverUrl = 'https://mgserver.run.goorm.io/'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
