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
    created() {
        if(this.$route.query.time) {
            this.time = this.$route.query.time
        }
        localStorage.router = this.$route.path

    },
    beforeDestroy() {
        clearTimeout(this.myTimeout)
    }
}