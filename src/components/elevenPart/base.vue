<template>
  <div class="outside-container">
    <div class="side-menu">
      <div class="title"> Server Communication </div>
      <router-link class="lesson" to="connectingToServer" tag="button" exact>connecting to server</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('connectingToServer')
  }
}
</script>
