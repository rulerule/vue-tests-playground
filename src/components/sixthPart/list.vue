<template>
  <div class="fifth-part">
    <h1> Part 6 - Advanced Components </h1>
    <button class="button-navigation" @click="advancedComponents()">Advanced Components </button>
    <button class="button-navigation exercise" @click="exercise8()"> Exercise 8 </button>
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
    exercise8 () {
      this.$router.push('exercise8')
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
