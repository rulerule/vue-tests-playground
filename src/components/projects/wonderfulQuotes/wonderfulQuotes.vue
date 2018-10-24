<template>
  <div class="wonderful-quotes">
    <quotes-counter></quotes-counter>
    <quote-adder></quote-adder>
    <quote-display></quote-display>
    <quote-footer></quote-footer>
    <hr>
  </div>
</template>

<script>
import QuoteAdder from './quoteAdder.vue'
import QuoteDisplay from './quoteDisplay.vue'
import QuotesCounter from './quotesCounter.vue'
import Footer from './footer.vue'
// import QuoteBus from '../../../main'
export default {
  data () {
    return {}
  },
  components: {
    'quote-adder': QuoteAdder,
    'quote-display': QuoteDisplay,
    'quotes-counter': QuotesCounter,
    'quote-footer': Footer
  }
}
</script>

<style lang="scss">
.wonderful-quotes {
  width:80%;
  margin:0 auto;
}
</style>
