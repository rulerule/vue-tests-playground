<template>
  <div class="outside-container">
    <div class="side-menu">
      <div class="title"> Components Communication </div>
      <router-link class="lesson" to="componentsCommunication" tag="button" exact>components communication</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('componentsCommunication')
  }
}
</script>
