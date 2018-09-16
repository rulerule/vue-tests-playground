<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> Username {{ name }} </p>
        <p> Age {{ userAge }} </p>
        <p>Reversed Username: {{ switchName() }}</p>
        <button @click="resetName()"> Reset Name </button>
    </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  props: {
    name: {
      type: String,
      default: 'badjoras22222'
    },
    userAge: {
      type: Number
    }
  },
  methods: {
    switchName () {
      return this.name.split('').reverse().join('')
    },
    resetName () {
      this.name = 'NAME RESETED'
      this.$emit('nameReset', this.name)
    }
  },
  created () {
    eventBus.$on('ageWasEdited', (data) => {
      this.userAge = data
    })
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
