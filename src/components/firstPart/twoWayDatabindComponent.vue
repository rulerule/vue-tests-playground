<template>
  <div class="third-component">
    <input type="text" v-model="name">
    <p>{{name}}</p>
    <button @click="increase">Increase Counter</button>
    <button @click="decrease">Decrease Counter</button>
    <button @click="secondCounter++">Increase Second Counter</button>
    <p> Counter: {{ counter }} | {{ secondCounter}} </p>
    <p> Result: {{ result() }} | {{ output }} </p>
    <GoBack></GoBack>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {
      name: 'max',
      counter: 0,
      secondCounter: 0
    }
  },
  components: {
    GoBack
  },
  computed: { // ONLY WORK FOR SYNC TASKS
    output () {
      console.log('computed')
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  },
  watch: {
    counter (value) {
      setTimeout(() => {
        this.counter = 0
      }, 2000)
    }
  },
  methods: {
    increase () {
      this.counter++
    //  this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    decrease () {
      this.counter--
    //  this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    result () {
      console.log('normal')
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  }
}
</script>

<style>
</style>
