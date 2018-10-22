<template>
  <div class="base-course">
    <div class="lectures-wrapper">
      <h1> List Of Lectures </h1>
      <button class="button-navigation" @click="part1()"> Basic Dom Manipulation </button>
      <button class="button-navigation" @click="part2()"> Conditionals </button>
      <button class="button-navigation" @click="part3()"> Understanding Vue Instance </button>
      <button class="button-navigation" @click="part4()"> Components Introduction </button>
      <button class="button-navigation" @click="part5()"> Components Communication </button>
      <button class="button-navigation" @click="part6()"> Advanced Components </button>
      <button class="button-navigation" @click="part7()"> Forms </button>
      <button class="button-navigation" @click="part8()"> Directives </button>
      <button class="button-navigation" @click="part9()"> Filters and Mixins </button>
      <button class="button-navigation" @click="part10()"> Animations </button>
      <button class="button-navigation" @click="part11()"> Connecting To Server </button>
      <button class="button-navigation" @click="part12()"> Routing </button>
    </div>
    <hr>
    <div class="courses-wrapper">
      <h1> Course Projects </h1>
      <button class="button-navigation exercise" @click="monsterGame()"> Monster Game by Myself </button>
      <button class="button-navigation exercise" @click="monsterGameOfficial()"> Monster Game Official </button>
      <button class="button-navigation exercise" @click="wonderfulQuotes()"> Wonderful Quotes </button>
      <button class="button-navigation exercise" @click="wonderfulQuotesOfficial()"> Wonderful Quotes Official </button>
      <button class="button-navigation exercise" @click="animatedMonsterGame()"> Animated Monster Game </button>
    </div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    monsterGame () {
      this.$router.push('monsterGame')
    },
    monsterGameOfficial () {
      this.$router.push('monsterGameOfficial')
    },
    wonderfulQuotes () {
      this.$router.push('wonderfulQuotes')
    },
    wonderfulQuotesOfficial () {
      this.$router.push('wonderfulQuotesOfficial')
    },
    animatedMonsterGame () {
      this.$router.push('animatedMonsterGame')
    },
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
    },
    part5 () {
      this.$router.push('fifthPart/')
    },
    part6 () {
      this.$router.push('sixthPart/')
    },
    part7 () {
      this.$router.push('sevenPart/')
    },
    part8 () {
      this.$router.push('eightPart/')
    },
    part9 () {
      this.$router.push('ninePart/')
    },
    part10 () {
      this.$router.push('tenPart/')
    },
    part11 () {
      this.$router.push('elevenPart/')
    },
    part12 () {
      this.$router.push('twelvePart/')
    }
  }
}
</script>
<style lang="scss">
@import 'src/styles/scss/buttons.scss';
div {
  width:100%;
  float:left;
  &.courses-wrapper {
    margin-top:20px;
  }
}
</style>
