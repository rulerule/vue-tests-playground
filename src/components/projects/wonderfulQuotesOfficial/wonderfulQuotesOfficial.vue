<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote(index)"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on quote to delete it </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './quoteGrid.vue'
import NewQuote from './newQuote.vue'
import Header from './header.vue'
export default {
  data () {
    return {
      maxQuotes: 10,
      quotes: [
        'just a quote to see something'
      ]
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    newQuote: NewQuote,
    appHeader: Header
  },
  methods: {
    newQuote (quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('please delete quotes first')
      }
      this.quotes.push(quote)
    },
    deleteQuote (index) {
      this.quotes.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
