<template>
  <div class="vue-instance">
    <div class="button-container">
      <button class="button-navigation" @click="backToList()"> Back to List </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    backToList () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
