import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp.js'
//import * as getters from './getters'
//import * as mutations from './mutations'

// plugin
// add global functionality
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
});
