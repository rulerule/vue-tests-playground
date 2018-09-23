<template>
  <div class="exercise-10">
    <button v-customOn:click="clicked" class="btn btn-primary"> Click Me </button>
    <hr>
    <div v-customOn:mouseenter="mouseEnter" v-customOn:mouseleave="mouseLeave" style="width:100px; height:100px; background-color:pink"></div>
    <GoBack></GoBack>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {}
  },
  components: {
    GoBack
  },
  directives: {
    customOn: {
      bind (el, binding) {
        // el.onclick = function () {
        //   binding.value()
        // }
        const type = binding.arg
        const fn = binding.value
        el.addEventListener(type, fn)
      }
    }
  },
  methods: {
    clicked () {
      alert('I was clicked')
    },
    mouseEnter () {
      alert('mouse entered')
    },
    mouseLeave () {
      alert('mouse left')
    }
  }
}
</script>

<style>
</style>
