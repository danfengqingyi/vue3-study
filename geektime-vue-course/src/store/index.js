
import { createStore } from 'vuex'
export default createStore({
  state() {
    return {
      count: 666
    }
  },
  getters:{
    double(state){
      return state.count*2
    }
    
  },
  mutations: {
    add: (state) => {
      state.count++
    }
  },
  actions: {
    asyncAdd:({ commit })=> {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  }
})
