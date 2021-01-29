<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 m-auto pt-5">
          <div class="buttons">
            <router-link tag="button" to="/red" class="btn btn-primary">Red</router-link>
            <router-link tag="button" to="/yellow" class="btn btn-primary">Yellow</router-link>
            <router-link tag="button" to="/green" class="btn btn-primary">Green</router-link>
          </div>
          <div class="col-sm-5 m-auto pt-5">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
  @keyframes flashing {
    0% {
        opacity: 1;
    }
    20% {
        opacity: .3;
    }
    40% {
        opacity: 1;
    }
    60% {
        opacity: .3;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: .3;
    }
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .rounded-circle {
    width: 150px;
    height: 150px;
    -webkit-border-radius: 75px;
    -moz-border-radius: 75px;
    border-radius: 5px;
    border: 1px solid #000;
    opacity: .5;
    position: relative;

    &:first-of-type {
      background-color: red;
    }

    &:nth-of-type(2) {
      background-color: yellow;
    }

    &:last-of-type {
      background-color: green;
    }   
  }

  button { 
    width: 100px;
  }
</style>