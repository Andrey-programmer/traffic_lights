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
import timer from './timer'

export default {  
    data() {
        return {
            myTimeout: null,
            time: 3
        }
    },    
    components: {
        timer
    },
    async mounted() {
        try {
            this.myTimeout = await setTimeout(() => {
                if(this.$store.getters.greenFlag) {
                    this.$router.push('/green')
                } else {
                    this.$router.push('/red') 
                }
            }, this.time * 1000);
        } catch (error) {
            console.log(error)
            throw error
        }
       
    },
    beforeDestroy() {
        clearInterval(this.myTimeout)
    }
}
</script>

<style lang="scss" scoped>
    .rounded-circle:nth-of-type(2) {
        opacity: 1;
    }
</style>
