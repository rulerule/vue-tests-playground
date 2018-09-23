<template>
<div class="container">
  <p v-text="'some text'"></p>
  <h1> Custom directives </h1>
  <p v-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green' ,blinkTime: '200'}"> Color this </p>
  <p v-local-highlight:background.delayed="'red'"> Color this </p>
  <p v-highlight:background="'red'"> Color this </p>
  <p v-highlight="'red'"> Color this </p>
  <GoBack></GoBack>
</div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  directives: {
    'local-highlight': {
      bind (el, binding, vnode) {
        // el.style.backgroundColor = 'green'
        // el.style.backgroundColor = binding.value
        var delay = 0
        if (binding.modifiers['delayed']) {
          delay = 3000
        }
        setTimeout(() => {
          if (binding.arg === 'background') {
            el.style.backgroundColor = binding.value
          } else {
            el.style.color = binding.value
          }
        }, delay)
      }
    }
  },
  data () {
    return {}
  },
  components: {
    GoBack
  }
}
</script>

<style>
</style>
