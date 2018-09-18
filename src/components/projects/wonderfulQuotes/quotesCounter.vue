<template>
  <div class="quote-counter">
    <h2> Quotes Added </h2>
    <div class="progressing-bar-placeholder">
      <div :style="{width: quotesNumber * 10 + '%'}" class="progressing-bar-counter">
        <p v-if="quotesNumber > 0"> {{ quotesNumber }} / {{ quotesLimit}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { quoteBus } from '../../../main'
export default {
  data () {
    return {
      quotesLimit: 10,
      quotesNumber: 0
    }
  },
  created () {
    quoteBus.$on('quote-added', () => {
      if (this.quotesLimit === this.quotesNumber) {
        alert('limite de quotes reached')
        return
      }
      this.quotesNumber++
    })
    quoteBus.$on('quote-deleted', () => {
      this.quotesNumber--
    })
  }
}
</script>

<style lang="scss">
.quote-counter {
  width:100%;
  height:auto;
  float:left;
  margin-bottom:20px;
}
.progressing-bar-placeholder {
  width:100%;
  height:20px;
  background-color:lightgray;
  box-shadow: 2px 2px 1px gray;
  position:relative;
  border-radius:5px;
  .progressing-bar-counter {
    height:100%;
    position:absolute;
    left:0;
    top:0;
    background-color:blue;
    color:white;
    text-align:center;
    border-radius:5px;
    transition:all 0.5s ease-in-out;
  }
}
</style>
