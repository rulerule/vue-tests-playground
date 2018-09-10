<template>
  <div class="second-part">
    <h1> Part 2 - Conditionals </h1>
    <button class="button-navigation" @click="conditionals()"> Conditionals And Loops </button>
    <button class="button-navigation exercise" @click="exercise(5)"> Exercise 5 </button>
    <button class="button-navigation exercise" @click="monsterGame()"> Monster Game by Myself </button>
    <button class="button-navigation exercise" @click="monsterGameOfficial()"> Monster Game Official </button>
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
    },
    exercise (number) {
      this.$router.push(`exercise${number}`)
    },
    monsterGame () {
      this.$router.push('monsterGame')
    },
    monsterGameOfficial () {
      this.$router.push('monsterGameOfficial')
    }
  }
}
</script>

<style>
</style>
