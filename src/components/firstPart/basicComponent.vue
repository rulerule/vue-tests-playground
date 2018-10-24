<template>
  <div class="first-component">
    <h1> {{firstWord}} </h1>
    <p v-html="finishedLink"></p>
    <div class="first"> {{firstWord}} {{getSecondWord()}} - <a v-bind:href="hrefElement">google</a></div>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style>
</style>
