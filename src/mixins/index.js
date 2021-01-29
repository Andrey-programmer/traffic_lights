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
    mounted() {
        localStorage.router = this.$route.path
    },
    beforeDestroy() {
        clearTimeout(this.myTimeout)
    }
}