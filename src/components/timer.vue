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
            myTimer: null,
            started: false,  
            sec: null
        }
    },
    created() {
        this.sec = this.seconds
        console.log('this.sec = ', localStorage.mlyat)
    },
    async mounted() {     
        console.log(localStorage)
        try {
            this.myTimer = await setInterval (() => {
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
        clearInterval(this.myTimer)
        localStorage.mlyat = this.sec
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