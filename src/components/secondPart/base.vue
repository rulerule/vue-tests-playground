<template>
  <div class="outside-container">
    <div class="side-menu">
      <div class="title"> Conditionals </div>
      <router-link class="lesson" to="conditionals" tag="button" exact>intro</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('conditionals')
  }
}
</script>
