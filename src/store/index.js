import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        greenOn: false
    },
    getters: {
        greenFlag(state) {
            return state.greenOn 
        }
    },
    mutations: {
        setGreenOn(state) {
            state.greenOn = true
        },
        setGreenOff(state) {
            state.greenOn = false
        }      
    },
    actions: {
       
    }
})