<template>
  <div class="seven-part">
    <h1> Part 7 - Forms </h1>
    <button class="button-navigation" @click="forms()">Forms</button>
    <button class="button-navigation exericse" @click="exercise9()">Exercise 9 </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    forms () {
      this.$router.push('forms')
    },
    exercise9 () {
      this.$router.push('exercise9')
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
