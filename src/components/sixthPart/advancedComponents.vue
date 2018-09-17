<template>
  <div class="advanced-components">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <button @click="selectedComponent = 'Quote'"> Quote </button>
          <button @click="selectedComponent = 'Author'"> Author </button>
          <button @click="selectedComponent = 'NewQuote'"> New Quote </button>
          <hr>
          <p> {{ selectedComponent }} </p>
          <hr>
          <keep-alive>
            <component :is="selectedComponent">
              <p> default Content </p>
            </component>
          </keep-alive>
          <!-- <Quote>
            <h2 slot="title"> {{ quoteTitle }} </h2>
            <p> A wonderful Quote </p>
            <p> Another beautiful quote </p>
          </Quote> -->
          <GoBack></GoBack>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
import Quote from './quote.vue'
import Author from './author.vue'
import NewQuote from './newQuote.vue'

export default {
  data () {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'Quote'
    }
  },
  components: {
    GoBack,
    Quote,
    Author,
    NewQuote
  }
}
</script>

<style>
h2 {
  color:blue;
}
</style>
