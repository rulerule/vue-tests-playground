<template>
  <div class="first-part outside-container">
    <div class="side-menu">
      <div class="title"> Routing </div>
      <router-link class="lesson" to="routing" tag="button" exact>vue-router</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('routing')
  }
}
</script>
