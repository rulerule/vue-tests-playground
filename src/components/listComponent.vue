<template>
  <div class="base-course">
    <h1> List Of Lectures </h1>
    <button class="button-navigation" @click="part1()"> Basic Dom Manipulation </button>
    <button class="button-navigation" @click="part2()"> Conditionals </button>
    <button class="button-navigation" @click="part3()"> Understanding Vue Instance </button>
    <button class="button-navigation" @click="part4()"> Components Introduction </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    part1 () {
      this.$router.push('firstPart/')
    },
    part2 () {
      this.$router.push('secondPart/')
    },
    part3 () {
      this.$router.push('thirdPart/')
    },
    part4 () {
      this.$router.push('fourthPart/')
    }
  }
}
</script>
<style lang="scss">
@import 'src/styles/scss/buttons.scss';
</style>
