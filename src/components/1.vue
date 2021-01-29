<template>
    <div class="wrapper">
        <div 
            class="rounded-circle mx-auto my-2"
            v-for="num in 3"
            :key="num"         
        >
            <timer 
                v-if="num === 1"
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
           time: 10
        }
    },    
    components: {
        timer
    },
    async mounted() {
        try {
            this.$store.commit('setGreenOn')
            await setTimeout(() => {
            this.$router.push('/yellow')
        }, this.time * 1000);  
        } catch (error) {
            console.log(error)
        }
             
        
    }
}
</script>

<style lang="scss" scoped>
    .rounded-circle:first-of-type {
        opacity: 1;
    }
</style>