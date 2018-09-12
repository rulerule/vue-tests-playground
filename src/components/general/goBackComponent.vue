<template>
  <div class="button-container">
    <button class="button-navigation" @click="backToList()"> Back to List </button>
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

<style lang="scss">
@import 'src/styles/scss/buttons.scss';
</style>
