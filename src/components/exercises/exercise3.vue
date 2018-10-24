<template>
    <div id="exercise">
        <!-- 1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it -->
        <div>
            <p>Current Value: {{ value }}</p>
            <button @click="value += 5">Add 5</button>
            <button @click="value += 1">Add 1</button>
            <p>{{ result }}</p>
        </div>
        <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
        <div>
            <input v-model="timer" @keyup="timer=$event.target.value" type="text">
            <div>reset time has been set to: {{ timer }} ms </div>
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Exercise3',
  data () {
    return {
      value: 0,
      timer: 0
    }
  },
  computed: {
    result: function () {
      if (this.value >= 37) {
        console.log('done')
        return 'reached it'
      } else {
        return 'not there yet'
      }
    }
  },
  watch: {
    result: function (value) {
      setTimeout(function () {
        this.value = 0
      }.bind(this), this.timer)
    },
    timer: function (value) {
      if (this.timer.length === 0) this.timer = 0
    }
  }
}
</script>
