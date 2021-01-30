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
        if(localStorage.closeRoute === "false") {
            this.time = localStorage.time
        }
        if(this.$route.query.time) {
            this.time = this.$route.query.time
        }        
        localStorage.router = this.$route.path
        localStorage.closeRoute = false
        console.log(localStorage)
        delete localStorage.destroy
    },
    beforeDestroy() {       
        clearTimeout(this.myTimeout)
    }
}