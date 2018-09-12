<template>
  <div class="conditionals">
    <h1> simple if </h1>
    <h3> v-if completely remove from the dom , while v-show just hides it </h3>
    <p v-if="show">You can see me one!</p>
    <p v-else>Now you see me two!</p>
    <template v-if="show">
      <p> inside a template</p>
      <p> so we can have a lot of stuffs </p>
      <p> this could also have been a div </p>
    </template>
    <p v-show="show2">Do you also see me?</p>
    <button @click="show = !show">Switch</button>
    <button @click="show2 = !show2">Switch with v-show </button>
    <hr>
    <h1> simple v-for </h1>
    <div class="second-part">
      <li v-for="(ingredient, index) in ingredients" :key='index'>name:{{ ingredient }} index:{{ index }}</li>
      <div v-for="(ingredient, index) in ingredients" :key='ingredient'>
        <h4> {{ ingredient }} </h4>
        <p> {{index}} </p>
      </div>
      <hr>
      <h1> neste object v-for </h1>
      <li v-for="person in persons" :key="person.color">{{person.name}} {{person.age}} {{person.color}}</li>
      <li v-for="({name, age , color}) in persons" :key="name">{{ name }} {{ age }} {{ color }}</li>
      <li v-for="person in persons" :key="person.age">
        <div v-for="(value, k, index) in person" :key="k"> {{k}}: {{value}} index: {{ index }}</div>
      </li>
      <hr>
      <h1> Loop in numbers </h1>
      <!-- <span v-for="n in 10" :key="n">{{ n }}</span> -->
      <hr>
      <h1> Keep track of information when using v-for </h1>
      <button @click="ingredients.push('spices')">Add New</button>
    </div>
    <GoBack></GoBack>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {
      show: true,
      show2: true,
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        {name: 'max', age: 27, color: 'red'},
        {name: 'anna', age: 'unkown', color: 'blue'}
      ]
    }
  },
  components: {
    GoBack
  }
}
</script>

<style>
</style>
