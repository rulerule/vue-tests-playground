<template>
  <div class="outside-container">
    <div class="side-menu">
      <div class="title"> Directives </div>
      <router-link class="lesson" to="directives" tag="button" exact>directives</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('directives')
  }
}
</script>
