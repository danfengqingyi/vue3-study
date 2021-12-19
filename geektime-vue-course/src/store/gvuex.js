
import { reactive, inject, computed } from "vue"
const STORE_KEY = '__store__'
function useStore() {
  return inject(STORE_KEY)
}
function createStore(options) {
  return new Store(options)
}
class Store {
  constructor(options) {
    this._state = reactive({
      data: options.state()
    })
    this._mutations = options.mutations
    this._actions = options.actions
    this.getters = {}
    Object.keys(options.getters).forEach(name => {
      const fn = options.getters[name]
      this.getters[name] = computed(() => fn(this.state))
    })
  }
  install(app) {
    app.provide(STORE_KEY, this)
  }
  get state() {
    return this._state.data
  }
  dispatch = (type, payload) =>{
    const entry = this._actions[type]
    entry && entry(this, payload)
    
  }
  commit = (type, payload) => {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }
}
export { createStore, useStore }