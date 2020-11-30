import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./router"
import axios from 'axios'
import Vuex from 'vuex'
import 'es6-promise/auto'
import { store } from '../common/store'

Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.prototype.$http = axios

Vue.prototype.serverUrl = 'https://wiesminiweb.run.goorm.io/'

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')