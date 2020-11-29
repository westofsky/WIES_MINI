import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
	{ 
		path: '/',
		name: 'Main',
		component: Main,
		children : [
			{
				path: '/',
				name: 'Home',
				component: Home,
			},
			{
				path: '/login',
				name: 'Login',
				component: Login,
			},
			{
				path: '/register',
				name: 'Register',
				component: Register,
			}
		]
	},
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router