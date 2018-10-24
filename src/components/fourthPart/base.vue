<template>
  <div class="outside-container">
    <div class="side-menu">
      <div class="title"> Components Introduction </div>
      <router-link class="lesson" to="componentsIntroduction" tag="button" exact>first component</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('componentsIntroduction')
  }
}
</script>
