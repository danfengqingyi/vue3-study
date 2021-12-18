
import { createStore } from 'vuex'
export default createStore({
  state () {
    return {
      count: 666
    }
  },
  mutations: {
    add (state) {
      state.count++
    }
  }
})
