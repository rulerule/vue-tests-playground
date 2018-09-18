<template>
  <div class="quote-display">
    <quote v-for="quote in quotes" :quote="quote" :key="quote.id"></quote>
  </div>
</template>

<script>
import Quote from './quote.vue'
import { quoteBus } from '../../../main'
export default {
  data () {
    return {
      quotes: [],
      quotesLimit: 10
    }
  },
  components: {
    quote: Quote
  },
  created () {
    quoteBus.$on('quote-added', (data) => {
      if (this.quotes.length === this.quotesLimit) return
      this.quotes.push({
        text: data,
        id: this.quotes.length
      })
    })
    quoteBus.$on('quote-deleted', (data) => {
      this.quotes = this.quotes.filter((item) => {
        return item.id !== data.id
      })
    })
  }
}
</script>

<style lang="scss">
.quote-display {
  width:100%;
  float:left;
}
</style>
