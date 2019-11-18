import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VuexPersist from 'vuex-persist'
const vuexLocal = new VuexPersist({
    storage:window.sessionStorage
});

const store = new Vuex.Store({
	//strict:true,
	state:{
		name:'',
	},
	mutations:{
    SET_NAME: (state, name) => {
      state.name = name
    },
	},

	plugins:[vuexLocal.plugin],
})

export default store;
