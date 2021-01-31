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
import mixin from '../mixins'

export default {
    mixins: [mixin],
    data() {
        return {
           time: 15
        }
    },    
    methods: {
        runTimer() {
            this.$store.commit('setGreenOff')
            localStorage.greenOn = false
            this.myTimeout = setTimeout(() => {
                localStorage.closeRoute = true
                this.$router.push('/yellow')            
            }, this.time * 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
    .rounded-circle:last-of-type {
        opacity: 1;

        &.flashing {
            animation: flashing 3s infinite;
        }
    }
</style>