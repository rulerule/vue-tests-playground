<template>
  <div class="first-part outside-container">
    <div class="side-menu">
      <div class="title"> State Management </div>
      <router-link class="lesson" to="vuex" tag="button" exact>vuex</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('vuex')
  }
}
</script>
