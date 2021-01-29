export default {
    state: {
        time: 0
    },
    getters: {
        getTime(state) {
            return  state.time
        }
    },
    mutations: {
        setTime(state, move) {
            state.time += move
        }
    }
}