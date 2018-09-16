<template>
  <div class="fifth-part">
    <h1> Part 6 - Advanced Components </h1>
    <button class="button-navigation" @click="advancedComponents()">Advanced Components </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    advancedComponents () {
      this.$router.push('advancedComponents')
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
