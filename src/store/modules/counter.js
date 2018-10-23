const state = {
  counter: 0,
  clicks: 0
}

const getters = {
  doubleCounter: state => {
    return state.counter * 2
  },
  simpleCounter: state => {
    return state.counter
  },
  stringCounter: state => {
    return `${state.clicks} Clicks`
  }
}

const mutations = {
  increment: (state, payload) => {
    state.counter += payload
    state.clicks++
  },
  decrement: (state, payload) => {
    state.counter -= payload
    state.clicks++
  }
}

const actions = {
  increment: context => {
    context.commit('increment')
  },
  decrement: context => {
    context.commit('decrement')
  },
  asyncIncrement: (context, payload) => {
    setTimeout(() => {
      context.commit('increment', payload)
    }, 1000)
  },
  asyncDecrement: (context, payload) => {
    setTimeout(() => {
      context.commit('decrement', payload)
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
