<template>
  <div class="second-part">
    <h1> Part 2 </h1>
    <button class="button-navigation" @click="conditionals()"> Conditionals </button>
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
    }
  }
}
</script>

<style>
</style>
