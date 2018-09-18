<template>
  <div @click="deleteMyself()" class="single-quote">
    <div class="quote-text"> {{ quote.text }} </div>
  </div>
</template>

<script>
import { quoteBus } from '../../../main'
export default {
  props: ['quote'],
  methods: {
    deleteMyself () {
      quoteBus.$emit('quote-deleted', this.quote)
    }
  }
}
</script>

<style lang="scss">
.single-quote {
  min-width:40px;
  min-height:40px;
  box-sizing:border-box;
  padding:25px 25px;
  border: 1px solid blue;
  float:left;
  cursor:pointer;
  margin-right:10px;
  margin-bottom:10px;
  .quote-text {
    font-style: italic;
    font-family: 'Margarine';
  }
}
</style>
