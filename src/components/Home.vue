<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-link to="/CountPage" class="button">
      ENTER
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to OUR Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only-->
<style lang="sass" scoped>
@import '../styles/home.sass'
</style>
