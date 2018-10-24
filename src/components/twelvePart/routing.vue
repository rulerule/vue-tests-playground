<template>
<div class="routing">
  <p> This class was used to build the routing of the application, so i took no additional info</p>
  <p>from router: {{ name }} </p>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
