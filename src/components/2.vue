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
    data() {
        return {
            
        }
    },
    async mounted() {
        await setTimeout(() => {
            if(this.$store.getters.greenFlag) {
                this.$router.push('/green')
            } else {
                this.$router.push('/red') 
            }
        }, 3000);
    },
    title: 'Светофор_2'
}
</script>

<style lang="scss" scoped>
    .rounded-circle:nth-of-type(2) {
        opacity: 1;
    }
</style>
