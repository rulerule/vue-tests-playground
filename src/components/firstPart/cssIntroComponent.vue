<template>
  <div class="fourth-component">
    <h1> part 1 </h1>
    <div
      class="demo"
      @click="attachRed = !attachRed"
      :class="divClasses"></div>
    <div class="demo" :class="[color, {red: attachRed}]"></div>
    <div class="demo"></div>
    <input type="text" v-model="color">
    <hr>
    <h1> part 2 </h1>
    <div class="demo" :style="{backgroundColor: color2}"></div>
    <div class="demo" :style="myStyle"></div>
    <div class="demo" :style="[myStyle, {height:width + 'px'}]"></div>
    <input type="text" v-model="color2">
    <input type="text" v-model="width">
    <hr>
    <GoBack></GoBack>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {
      attachRed: false,
      color: 'green',
      color2: 'gray',
      width: 100
    }
  },
  components: {
    GoBack
  },
  computed: {
    divClasses () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle () {
      return {
        backgroundColor: this.color2,
        width: this.width + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
  .demo {
    width:100px;
    height:100px;
    background-color:gray;
    display:inline-block;
    margin:10px;
    cursor:pointer;
  }
  .green {
    background-color:green;
  }
  .red {
    background-color:red;
  }
  .blue {
    background-color:blue;
  }
</style>
