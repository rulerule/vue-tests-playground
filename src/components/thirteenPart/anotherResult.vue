<template>
  <div>
    <p>Clicks Counter is: {{ stringCounter }}</p>
    <p>Doubled Counter is: {{ doubleCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'doubleCounter',
      'simpleCounter',
      'stringCounter'
    ]),
    ourOwn () {
      return 2
    }
  }
}
</script>
