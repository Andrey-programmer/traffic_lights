<template>
    <div>
        <button type="button" class="btn btn-success" @click="save">Save position</button>
    </div>
</template>

<script>
    export default {
        methods: {
            save() {
                delete localStorage.position
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>