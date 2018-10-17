<template>
  <div class="seven-part">
    <h1> Part 10 - Animations </h1>
    <button class="button-navigation" @click="animations()">Animations</button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
    <button class="button-navigation exercise" @click="exercise12()">Exercise 12 </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    animations () {
      this.$router.push('animations')
    },
    backToList () {
      this.$router.push('/')
    },
    exercise12 () {
      this.$router.push('exercise12')
    }
  }
}
</script>

<style lang="scss">
@import 'src/styles/scss/buttons.scss';
</style>
