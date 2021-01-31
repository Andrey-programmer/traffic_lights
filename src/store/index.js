import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Использовал до записи в хранилище
export default new Vuex.Store({
    state: {
        greenOn: false,
        handlechange: false
    },
    getters: {
        greenFlag(state) {
            return state.greenOn 
        },
        getHandleChange(state) {
            return state.handlechange
        }
    },
    mutations: {
        setGreenOn(state) {
            state.greenOn = true
        },
        setGreenOff(state) {
            state.greenOn = false
        },
        setHandleChange(state) {
            state.handlechange = true
        }  
    }
})