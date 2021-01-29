<template>
    <div class="wrapper">
        <div 
            class="rounded-circle mx-auto my-2"
            :class="{'flashing': flashing}"
            v-for="num in 3"
            :key="num"
        >
             <timer 
                v-if="num === 3"
                :seconds = time
                @flashing="flashing = $event"
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
           time: 15,
           flashing: false
        }
    },    
    components: {
        timer
    },
    async mounted() {
        try {
            this.$store.commit('setGreenOff')
            this.myTimeout = await setTimeout(() => {
                this.$router.push('/yellow')            
            }, this.time * 1000);
            
        } catch (error) {
            console.log(error)
        }
        
    },
    beforeDestroy() {
        clearInterval(this.myTimeout)
    }
}
</script>

<style lang="scss" scoped>
    @keyframes flashing {
        0% {
            opacity: 1;
        }
        20% {
            opacity: .3;
        }
        40% {
            opacity: 1;
        }
        60% {
            opacity: .3;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: .3;
        }
    }

    .rounded-circle:last-of-type {
        opacity: 1;

        &.flashing {
            animation: flashing 3s infinite;
        }
    }

</style>