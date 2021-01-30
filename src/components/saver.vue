<template>
    <div>
        <p v-if="route">
            <b>Save position:</b>
            <br> 
            route: "{{route}}", time: {{stime}}sec
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
                stime: null
            }
        },
        mounted() {
            this.route = localStorage.route
            this.stime = localStorage.saverTime
        },
        methods: {
            save() {
                this.route = localStorage.route = localStorage.router
                this.stime = localStorage.saverTime = localStorage.time
                this.runner = false

                console.log(localStorage)
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