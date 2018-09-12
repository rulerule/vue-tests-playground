<template>
  <div class="first-component">
    <h1> {{firstWord}} </h1>
    <p v-html="finishedLink"></p>
    <div class="first"> {{firstWord}} {{getSecondWord()}} - <a v-bind:href="hrefElement">google</a></div>
    <GoBack></GoBack>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
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
  },
  components: {
    GoBack
  }
}
</script>

<style>
</style>
