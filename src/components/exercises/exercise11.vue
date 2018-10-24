<template>
  <div class="exercise-11">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{text | reverse-text}}</p>
                <p> {{text2 | add-length}}</p>
                <p> {{reversedText}} </p>
                <p> {{lengthText}} </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { exercise11Mixin } from './exercise11mixin'
export default {
  mixins: [exercise11Mixin],
  data () {
    return {
      text: 'text to be reversed',
      text2: 'text to be counted'
    }
  },
  filters: {
    'reverse-text' (value) {
      return value.split('').reverse().join('')
    },
    'add-length' (value) {
      return `${value} (${value.length})`
    }
  }
}
</script>

<style>
</style>
