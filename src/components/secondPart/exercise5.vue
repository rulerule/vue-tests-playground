<template>
  <div class="exercise-5">
    <!-- 1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference -->
    <div>
      <button @click="show = !show">Toggle</button>
      <p v-if="show">You either see me ...</p>
      <p v-else>...or me</p>
      <p v-show="show">You either see me ...</p>
      <p v-show="!show">...or me</p>
    </div>
    <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
    <ul>
      <li v-for="(person, index) in array" :key="person">{{person}} {{index}}</li>
    </ul>
    <!-- 3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item. -->
    <ul>
      <li v-for="(v, k, index) in myObject" :key="v">{{k}}: {{v}} - {{index}}</li>
    </ul>
    <!-- 4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
    <ul>
      <li v-for="element in testData" :key="element.title">
        <div v-if="checkArray(element)">
          <div v-for="value in element" :key="value">{{ value }}</div>
        </div>
        <div v-else> {{ element }} </div>
      </li>
    </ul>
    <button class="button-navigation" @click="backToList()"> Back To List </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      array: ['Max', 'Anna', 'Chris', 'Manu'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData: {
        name: 'TESTOBJECT',
        id: 10,
        data: [1.67, 1.33, 0.98, 2.21]
      }
    }
  },
  methods: {
    checkArray (element) {
      return Array.isArray(element)
    },
    backToList () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
