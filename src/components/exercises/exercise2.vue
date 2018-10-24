<template>
    <div id="exercise">
        <!-- 1) Show an alert when the Button gets clicked -->
        <div>
            <button v-on:click="alertMe(textToAlert)">Show Alert</button>
        </div>
        <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
        <div>
            <input v-on:keyup="storeValue" type="text">
            <p> {{ value }}</p>
        </div>
        <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
        <div>
            <input v-on:keydown.enter="storeValue" type="text">
            <p> {{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Exercise2',
  data () {
    return {
      value: 0,
      textToAlert: 'badjorasDiModem'
    }
  },
  methods: {
    alertMe: function (text) {
      alert(text)
    },
    storeValue: function (event) {
      this.value = event.target.value
    }
  }
}
</script>
