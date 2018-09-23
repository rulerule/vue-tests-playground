<template>
  <div class="seven-part">
    <h1> Part 8 - Directives </h1>
    <button class="button-navigation" @click="directives()">Directives</button>
    <button class="button-navigation exercise" @click="exercise10()">Exercise 10 </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    directives () {
      this.$router.push('directives')
    },
    exercise10 () {
      this.$router.push('exercise10')
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
