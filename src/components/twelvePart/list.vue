<template>
  <div class="twelve-part">
    <h1> Part 12 - Routing </h1>
    <button class="button-navigation" @click="routing()">Routing</button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    routing () {
      this.$router.push('routing')
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
