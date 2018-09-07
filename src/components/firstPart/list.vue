<template>
  <div class="first-part">
    <h1> Part 1 </h1>
    <button class="button-navigation" v-on:click="basicComponent()"> Basic Component with strings </button>
    <button class="button-navigation" v-on:click="eventsIntro()"> Start Events </button>
    <button class="button-navigation" v-on:click="twoWayDatabind()"> Two way databind </button>
    <button class="button-navigation" v-on:click="cssIntro()"> CSS INTRO </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
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
    }
  }
}
</script>

<style>
</style>
