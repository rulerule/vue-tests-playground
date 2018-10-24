<template>
  <div class="outside-container">
    <div class="side-menu">
      <div class="title"> Forms </div>
      <router-link class="lesson" to="forms" tag="button" exact>forms</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('forms')
  }
}
</script>
