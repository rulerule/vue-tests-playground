<template>
  <div class="components-communication">
    <User></User>
    <GoBack></GoBack>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
import User from './user.vue'
export default {
  data () {
    return {}
  },
  components: {
    GoBack,
    User
  }
}
</script>

<style>
</style>
