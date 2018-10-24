<template>
<div class="container">
  <button @click="fruits.push('berries')">Add new fruit</button>
  <input v-model="filterText">
  <ul>
    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
  </ul>
  <app-duplicate-mixin></app-duplicate-mixin>
</div>
</template>

<script>
import AppDuplicateMixin from './mixinEqual.vue'
import { fruitMixin } from './fruitMixin'
export default {
  mixins: [fruitMixin],
  components: {
    'app-duplicate-mixin': AppDuplicateMixin
  }
}
</script>

<style>
</style>
