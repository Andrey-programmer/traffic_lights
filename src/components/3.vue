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
    async mounted() {
        try {
            this.$store.commit('setGreenOff')
            this.myTimeout = await setTimeout(() => {
                this.$router.push('/yellow')            
            }, this.time * 1000);
            
        } catch (error) {
            console.log(error)
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