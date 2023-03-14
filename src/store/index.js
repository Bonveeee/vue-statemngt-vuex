import Vue from 'vue'
import Vuex from 'vuex';
import todos from './modules/todos';

// entry point to vuex
//bring all modules

//load the vues
Vue.use(Vuex);

//create store
export default new Vuex.Store({
modules: {
    todos
},
})