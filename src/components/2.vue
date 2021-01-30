<template>
    <div class="wrapper">
        <div 
            class="rounded-circle mx-auto my-2"
            v-for="num in 3"
            :key="num"
        >
            <timer 
                v-if="num === 2"
                :seconds = time
            ></timer>
        </div>
    </div>
</template>

<script>
import mixin from '../mixins'

export default {
    mixins: [mixin],  
    data() {
        return {
            time: 3
        }
    },    
    async mounted() {
        try {
            this.myTimeout = await setTimeout(() => {
                if(localStorage.greenOn === "true") {
                    localStorage.closeRoute = true
                    this.$router.push('/green')
                    // ! До записи в хранилище использовал store //
                    // if(this.$store.getters.greenFlag) {
                    //     localStorage.closeRoute = true
                    //     this.$router.push('/green')
                    // } else {
                    //     localStorage.closeRoute = true
                    //     this.$router.push('/red') 
                    // }
                } else {
                    localStorage.closeRoute = true
                    this.$router.push('/red') 
                }
            }, this.time * 1000);
        } catch (error) {
            console.log(error)
            throw error
        }
        
    }
}
</script>

<style lang="scss" scoped>
    .rounded-circle:nth-of-type(2) {
        opacity: 1;
    }
</style>
