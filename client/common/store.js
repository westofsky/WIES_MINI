import Vue from "vue";
import Vuex from "vuex";
import 'es6-promise/auto'
import Constants from "./Constants"

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		Constants: Constants
	},
	getters:{
		CONSTANTS: state =>{
			return state.Constants
		}
	}
})