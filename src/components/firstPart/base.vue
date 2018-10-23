<template>
  <div class="first-part">
    <h1> Part 1 - Basic Dom Manipulation </h1>
    <button class="button-navigation" v-on:click="basicComponent()"> Basic Component with strings </button>
    <button class="button-navigation" v-on:click="eventsIntro()"> Start Events </button>
    <button class="button-navigation" v-on:click="twoWayDatabind()"> Two way databind </button>
    <button class="button-navigation" v-on:click="cssIntro()"> CSS INTRO </button>
    <button class="button-navigation exercise" @click="exercise(1)"> Exercise 1 </button>
    <button class="button-navigation exercise" @click="exercise(2)"> Exercise 2 </button>
    <button class="button-navigation exercise" @click="exercise(3)"> Exercise 3 </button>
    <button class="button-navigation exercise" @click="exercise(4)"> Exercise 4 </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    basicComponent: function () {
      this.$router.push('basic')
    },
    eventsIntro: function () {
      this.$router.push('events')
    },
    twoWayDatabind: function () {
      this.$router.push('twoWayDatabind')
    },
    cssIntro: function () {
      this.$router.push('cssIntro')
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
