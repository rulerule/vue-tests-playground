<template>
  <div class="fourth-part">
    <h1> Part 4 - Components Introduction </h1>
    <button class="button-navigation" @click="vueInstance()"> Introduction to Components </button>
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
      this.$router.push('componentsIntroduction')
    },
    backToList () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/scss/buttons.scss';
</style>
