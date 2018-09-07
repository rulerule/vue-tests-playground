<template>
  <div class="conditionals">
    <div class="button-container">
      <button class="button-navigation" @click="backToList()"> Back to List </button>
    </div>
  </div>
</template>

<script>
module.exports = {
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
