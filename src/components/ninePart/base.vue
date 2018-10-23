<template>
  <div class="seven-part">
    <h1> Part 9 - Filters and Mixins </h1>
    <button class="button-navigation" @click="filters()">Filters</button>
    <button class="button-navigation" @click="mixins()">Mixins</button>
    <button class="button-navigation exercise" @click="exercise11()">Exercise 11 </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    filters () {
      this.$router.push('filters')
    },
    mixins () {
      this.$router.push('mixins')
    },
    exercise11 () {
      this.$router.push('exercise11')
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
