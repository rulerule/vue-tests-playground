<template>
  <div class="first-part outside-container">
    <div class="side-menu">
      <div class="title"> Dom Manipulation </div>
      <router-link class="lesson" to="basic" tag="button" exact>basic component</router-link>
      <router-link class="lesson" to="events" tag="button" exact>start events</router-link>
      <router-link class="lesson" to="twoWayDatabind" tag="button" exact>two way databind</router-link>
      <router-link class="lesson" to="cssIntro" tag="button" exact>css</router-link>
    </div>
    <router-view class="side-content"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('basic')
  }
}
</script>
