<template>
    <div class="wrapper">
        <div 
            class="rounded-circle mx-auto my-2"
            v-for="num in 3"
            :key="num"
            :ref="`color_${num}`"
        >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    async mounted() {
        this.$store.commit('setGreenOn')
        await setTimeout(() => {
            this.$router.push('/yellow')
        }, 3000);        
        
    }
}
</script>

<style lang="scss" scoped>
    .rounded-circle:first-of-type {
        opacity: 1;
    }
</style>