<template>
  <div class="final-project">
    <div class="container">
      <app-header></app-header>
      <h1> Not tottaly finished, only made the parts i didnt felt really confortable with </h1>
      <h1> Trade or View your Portfoli </h1>
      <p> Your funds : {{funds}} </p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './header.vue'
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  components: {
    'app-header': AppHeader
  },
  created () {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
</style>
