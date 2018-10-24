<template>
  <div class="components-introduction">
    <p> Server Status: {{ status }} </p>
    <hr>
    <button @click="changeStatus()">Change status </button>
    <h2> there is 5 buttons just to test it out </h2>
  </div>
</template>

<script>
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
  }
}
</script>

<style>
</style>
