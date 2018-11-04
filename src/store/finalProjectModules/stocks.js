import stocks from '../../components/projects/finalProject/stocks'

const state = {
  stocks: []
}

const mutations = {
  setStocks: (state, stocks) => {
    state.stocks = stocks
  },
  rndStocks: (state) => {
    const teste = ''
    console.log(teste)
  }
}

const actions = {
  buyStock: (context, order) => {
    context.commit('buyStock', order)
  },
  initStocks: context => {
    context.commit('setStocks', stocks)
  },
  randomizeStocks: context => {
    context.commit('rndStocks')
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
