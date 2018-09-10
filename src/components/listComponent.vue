<template>
  <div class="base-course">
    <h1> List Of Lectures </h1>
    <button class="button-navigation" @click="part1()"> Basic Dom Manipulation </button>
    <button class="button-navigation" @click="part2()"> Conditionals </button>
    <button class="button-navigation" @click="part3()"> Understanding Vue Instance </button>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {}
  },
  methods: {
    part1 () {
      this.$router.push('firstPart/')
    },
    part2 () {
      this.$router.push('secondPart/')
    },
    part3 () {
      this.$router.push('thirdPart/')
    }
  }
}
</script>
<style lang="scss">
.button-container {
  float:left;
  width:100%;
  margin-top:20px;
}
.button-container-list {
  width:120px;
  height:120px;
  margin-right:20px;
  float:left;
  p {
    width:100%;
    text-align:center;
    float:left;
    color:blue;
  }
}
.button-navigation {
  float:left;
  width:130px;
  height:60px;
  color:white;
  background-color:purple;
  border:none;
  margin-right:10px;
  box-shadow: 1px 1px 1px 1px gray;
  margin-top:5px;
  margin-bottom:5px;
  cursor:pointer;
  &.start {
    background-color:orange;
  }
  &.exercise {
    background-color:green;
  }
}
</style>
