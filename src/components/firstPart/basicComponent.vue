<template>
  <div class="first-component">
    <h1> {{firstWord}} </h1>
    <p v-html="finishedLink"></p>
    <div class="first"> {{firstWord}} {{getSecondWord()}} - <a v-bind:href="hrefElement">google</a></div>
    <div class="button-container">
      <button class="button-navigation" @click="backToList()"> Back to List </button>
    </div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      firstWord: 'hello',
      secondWord: 'world',
      hrefElement: 'http://www.google.pt',
      finishedLink: '<a href="http://google.com">Google</a>'
    }
  },
  methods: {
    getSecondWord () {
      return this.firstWord
    },
    backToList () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
