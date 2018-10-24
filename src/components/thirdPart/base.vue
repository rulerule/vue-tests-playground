<template>
  <div class="first-part outside-container">
    <div class="side-menu">
      <div class="title"> Vue instance </div>
      <router-link class="lesson" to="vueInstance" tag="button" exact>concepts</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('vueInstance')
  }
}
</script>
