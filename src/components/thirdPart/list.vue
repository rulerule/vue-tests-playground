<template>
  <div class="third-part">
    <h1> Part 3 - Understanding Vue Instance </h1>
    <button class="button-navigation" @click="vueInstance()"> Vue Instance </button>
    <button class="button-navigation start" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    vueInstance () {
      this.$router.push('vueInstance')
    },
    backToList () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
