<template>
  <div>
    <p> Clicks Counter is: {{ clicks }}</p>
    <p> Simple Counter is: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.getters.simpleCounter
    },
    clicks () {
      return this.$store.getters.stringCounter
    }
  }
}
</script>
