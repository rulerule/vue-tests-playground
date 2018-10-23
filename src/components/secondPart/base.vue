<template>
  <div class="second-part">
    <h1> Part 2 - Conditionals </h1>
    <button class="button-navigation" @click="conditionals()"> Conditionals And Loops </button>
    <button class="button-navigation exercise" @click="exercise(5)"> Exercise 5 </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    conditionals () {
      this.$router.push('conditionals')
    },
    backToList () {
      this.$router.push('/')
    },
    exercise (number) {
      this.$router.push(`exercise${number}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/scss/buttons.scss';
</style>
