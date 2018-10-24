<template>
  <div class="first-part outside-container">
    <div class="side-menu">
      <div class="title"> Filters and Mixins </div>
      <router-link class="lesson" to="filters" tag="button" exact>filters</router-link>
      <router-link class="lesson" to="mixins" tag="button" exact>mixins</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('filters')
  }
}
</script>
