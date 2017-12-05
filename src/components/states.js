import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({

state: {
	projectNo: 0	
},

mutations: {

	nextProj: state => {

		if (state.projectNo < 4) {
			state.projectNo++;
		} else if (state.projectNo = 4) {
			state.projectNo = 0;
		}
	},

	prevProj: state => {
		if (state.projectNo > 0) {
			state.projectNo--;
		} else if (state.projectNo = 4) {
			state.projectNo = 4;
		}
	}
}

});