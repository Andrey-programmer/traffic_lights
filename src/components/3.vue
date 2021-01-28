<template>
    <div class="wrapper">
        <div 
            class="rounded-circle mx-auto my-2"
            v-for="num in 3"
            :key="num"
        >
        </div>
    </div>
</template>

<script>
export default {
    async mounted() {
        this.$store.commit('setGreenOff')
        await setTimeout(() => {
            this.$router.push('/yellow')            
        }, 15000);
        
    }
}
</script>

<style lang="scss" scoped>
    .rounded-circle:last-of-type {
        opacity: 1;
    }
</style>