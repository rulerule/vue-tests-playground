<template>
  <div class="twelve-part">
    <h1> Part 13 - Vuex </h1>
    <button class="button-navigation" @click="vuex()">Vuex</button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    vuex () {
      this.$router.push('vuex')
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
