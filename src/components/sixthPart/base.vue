<template>
  <div class="first-part outside-container">
    <div class="side-menu">
      <div class="title"> Advanced Components </div>
      <router-link class="lesson" to="advancedComponents" tag="button" exact>advanced components</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('advancedComponents')
  }
}
</script>
