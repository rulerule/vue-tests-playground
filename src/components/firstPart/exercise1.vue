<template>
    <div id="exercise">
       <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
        <p>name: {{ name }} age: {{age}}</p>
        <!-- 2) Output your age, multiplied by 3 -->
        <p> {{ multiplyAge() }}</p>
        <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
        <p> {{ randomNumber() }}</p>
        <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
        <div>
            <img v-bind:src="imgToDisplay" style="width:100px;height:100px">
        </div>
        <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
        <div>
            <input v-bind:value="name" type="text">
        </div>
        <GoBack></GoBack>
    </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  name: 'Exercise1',
  data () {
    return {
      name: 'badjoras',
      age: '90',
      imgToDisplay: 'https://i.imgur.com/zygpOzL.gif'
    }
  },
  components: {
    GoBack
  },
  methods: {
    multiplyAge: function () {
      return this.age * 3
    },
    randomNumber: function () {
      return Math.random(0, 1)
    }
  }
}
</script>
