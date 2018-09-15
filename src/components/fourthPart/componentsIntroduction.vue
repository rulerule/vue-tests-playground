<template>
  <div class="components-introduction">
    <p> Server Status: {{ status }} </p>
    <hr>
    <button @click="changeStatus()">Change status </button>
    <h2> there is 5 buttons just to test it out </h2>
    <GoBack v-for="server in 5" :key="server"></GoBack>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  },
  components: {
    GoBack
  }
}
</script>

<style>
</style>
