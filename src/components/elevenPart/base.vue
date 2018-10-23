<template>
  <div class="eleven-part">
    <h1> Part 11 - Connecting to Servers </h1>
    <button class="button-navigation" @click="connectingToServer()">Http - vue resource</button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    connectingToServer () {
      this.$router.push('connectingToServer')
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
