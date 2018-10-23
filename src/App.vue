<template>
  <div id="app">
    <ListComponent></ListComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import ListComponent from './components/listComponent'
export default {
  data () {
    return {}
  },
  components: {
    ListComponent
  }
}
</script>

<style>
</style>
