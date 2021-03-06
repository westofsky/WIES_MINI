import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Userpage from '../views/Userpage.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import CheckEmail from '../components/CheckEmail.vue'

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
				component: Home
			},
			{
				path: '/login',
				name: 'Login',
				component: Login
			},
			{
				path: '/register',
				name: 'Register',
				component: Register
			},
			{
				path: '/checkemail',
				name: 'CheckEmail',
				component: CheckEmail,
				props: true
			},
			{
				path : '/userpage',
				name : 'Userpage',
				component : Userpage,
			},
		]
	},
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router