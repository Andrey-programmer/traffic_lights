<template>
    <div>
        <p v-if="route">
            <b>Save position:</b>
            <br> 
            route: "{{route}}", time: {{time}}sec
        </p>
        <button type="button" class="btn btn-success" @click="save">Save position</button>
        <br>
        <button :disabled=runner type="button" class="btn btn-dark mt-5" @click="run" >Run position</button>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                runner: false,
                route: null,
                time: null
            }
        },
        mounted() {
            this.route = localStorage.router
            this.time = localStorage.saverTime
        },
        methods: {
            save() {
                this.route = localStorage.route = localStorage.router
                this.time = localStorage.saverTime = localStorage.time
                this.runner = false
            },
            run() {
                this.runner = true
                this.$router.push(`${localStorage.route}?time=${+localStorage.saverTime}`)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>