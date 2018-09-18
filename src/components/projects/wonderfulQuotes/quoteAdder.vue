<template>
  <div class="quote-adder">
    <h5> Quote </h5>
    <textarea v-model="message" placeholder="type your quote" class="quote-inserter"></textarea>
    <button class="add-quote" @click="addQuote()"> Add Quote </button>
  </div>
</template>

<script>
import { quoteBus } from '../../../main'
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    addQuote () {
      if (!this.message.length) {
        alert('quote cant be empty')
        return
      }
      quoteBus.$emit('quote-added', this.message)
    }
  }
}
</script>

<style lang="scss">
.quote-adder {
  width:400px;
  height:300px;
  margin:0 auto;
  textarea {
    width:100%;
    height:120px;
  }
  button {
    position:relative;
    left:50%;
    transform:translateX(-50%);
  }
  h5 {
    margin-bottom:0;
  }
}
</style>
