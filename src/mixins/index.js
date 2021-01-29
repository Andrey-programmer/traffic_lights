import timer from '../components/timer.vue'

export default {
    data() {
        return {
            myTimeout: null,            
            flashing: false
        }
    },    
    components: {
        timer
    },
    beforeDestroy() {
        clearTimeout(this.myTimeout)
    }
}