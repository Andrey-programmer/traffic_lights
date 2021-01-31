<template>
    <div class="timer">
        {{ sec }}
    </div>
</template>

<script>

export default {
    props: ['seconds'],
    data() {
        return {
            myInterval: null,
            started: false,  
            sec: null
        }
    },
    created() {
        this.sec = this.seconds
    },
    watch: {
        sec() {
            localStorage.time = this.sec
            // console.log(localStorage)
        },
        $route() {
            this.sec = localStorage.saverTime
        }
    },
    async mounted() {     
        try {
            this.myInterval = await setInterval (() => {
            this.sec--; 
            // Мигание
            if(this.sec <= 3) {
                this.$emit('flashing', true)
            }

        }, 1000)
        } catch (error) {
            console.log(error)
        }
    },
    beforeDestroy() {
        clearInterval(this.myInterval)
    }

}
</script>

<style lang="scss" scoped>
    .timer {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        height: 100%;
        text-align: center;
        line-height: 130px;
        font-size: 50px;
    }
</style>