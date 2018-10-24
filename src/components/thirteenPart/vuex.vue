<template>
<div class="vuex">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result :counter="counter"></app-result>
        <app-another-result :counter="counter"></app-another-result>
        <hr>
        <h4> not using the store, probably will not work by the time we test this </h4>
        <app-counter></app-counter>
        <br>
        <h4> the mutations are expecting a payload, so this will be shit cause it will pass mouse events</h4>
        <app-another-counter></app-another-counter>
        <br>
        <h4> the working one (setTimeout of 1000ms) </h4>
        <app-yet-another-counter></app-yet-another-counter>
        <br>
        <input v-model="value" type="text">
        <p> {{ value }} </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Counter from './Counter.vue'
import AnotherCounter from './anotherCounter.vue'
import YetAnotherCounter from './yetAnotherCounter.vue'
import Result from './Result.vue'
import AnotherResult from './anotherResult.vue'
export default {
  data () {
    return {
      counter: 0
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherCounter: AnotherCounter,
    appAnotherResult: AnotherResult,
    appYetAnotherCounter: YetAnotherCounter
  },
  computed: {
    value: {
      get () {
        return this.$store.getters.value
      },
      set (value) {
        this.$store.dispatch('updateValue', value)
      }

    }
  },
  methods: {
    updateValue (event) {
      this.$store.dispatch('updateValue', event.target.value)
    }
  }
}
</script>

<style lang="scss">
</style>
