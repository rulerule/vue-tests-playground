<template>
<div class="container">
  <button @click="fruits.push('berries')">Add new fruit</button>
  <input v-model="filterText">
  <ul>
    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
  </ul>
  <app-duplicate-mixin></app-duplicate-mixin>
  <GoBack></GoBack>
</div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
import AppDuplicateMixin from './mixinEqual.vue'
import { fruitMixin } from './fruitMixin'
export default {
  mixins: [fruitMixin],
  components: {
    GoBack,
    'app-duplicate-mixin': AppDuplicateMixin
  }
}
</script>

<style>
</style>
