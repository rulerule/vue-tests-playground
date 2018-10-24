<template>
  <div class="first-part outside-container">
    <div class="side-menu">
      <div class="title"> Animations </div>
      <router-link class="lesson" to="animations" tag="button" exact>animations</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('animations')
  }
}
</script>
