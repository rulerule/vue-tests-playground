<template>
  <div class="fifth-part">
    <h1> Part 5 - Components Communication </h1>
    <button class="button-navigation" @click="componentsCommunication()">Introduction to Components Communication </button>
    <button class="button-navigation exercise" @click="exercise7()"> Exercise 7 </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    componentsCommunication () {
      this.$router.push('componentsCommunication')
    },
    exercise7 () {
      this.$router.push('exercise7')
    },
    backToList () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import 'src/styles/scss/buttons.scss';
</style>
