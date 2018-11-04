import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'
// import value from './modules/value'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

// final project modules
import stocks from './finalProjectModules/stocks'
import portfolio from './finalProjectModules/portfolio'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    stocks,
    counter,
    portfolio
  }
})
