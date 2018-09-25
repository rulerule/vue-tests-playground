<template>
<div class="container">
  <p> {{text | to-uppercase | to-lowercase}} </p>
  <hr>
  <input v-model="filterText">
  <ul>
    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
  </ul>
  <GoBack></GoBack>
</div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  components: {
    GoBack
  },
  filters: {
    'to-uppercase' (value) {
      return value.toUpperCase()
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      })
    }
  }
}
</script>

<style>
</style>
