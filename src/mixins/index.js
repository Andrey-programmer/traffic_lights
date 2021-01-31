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
        if(localStorage.closeRoute === "false" && !this.$store.getters.getHandleChange) {
            this.time = localStorage.time
        }
        if(this.$route.query.time) {
            this.time = this.$route.query.time
        }        
        localStorage.router = this.$route.path
        localStorage.closeRoute = false
        console.log(localStorage)
    },
    mounted() {
        this.runTimer()
    },
    beforeDestroy() {       
        clearTimeout(this.myTimeout)
    }
}