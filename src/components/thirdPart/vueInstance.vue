<template>
  <div class="vue-instance">
    <h1 ref="heading">{{ title }}</h1>
    <h4> This Lecture is pretty much theoric, there is not much going on </h4>
    <button @click="show">Show Paragraph</button>
    <p v-if="showParagraph">This is not always visible</p>
    <h1> Vue Instance Lifecyle</h1>
    <img :src="imageToDisplay" style="width:650px;height:650px">
    <p :style="{color: informationParagraphColor}"> If you check the console there is console log matched with the different parts of the vue instance </p>
    <p> NOTE: the destroy method doesnt remove the code from the dom, just the vue instance itself. </p>
    <button @click="title = 'changed'"> update title to test update </button>
    <button @click="destroy()"> DESTROY </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'The VueJS Instance',
      showParagraph: false,
      imageToDisplay: '../../../static/vue_lifecycle.png',
      informationParagraphColor: 'blue'
    }
  },
  methods: {
    show () {
      this.showParagraph = true
      this.updateTitle('The VueJS Instance (UPDATED)')
      this.$refs.heading.innerText = 'teste the $refs'
    },
    updateTitle (title) {
      this.title = title
    },
    destroy () {
      this.$destroy()
    }
  },
  computed: {
    lowercaseTitle () {
      return this.title.toLowerCase()
    }
  },
  watch: {
    title (value) {
      alert(`Title changed, new value: ${value}`)
    }
  },
  beforeCreate () {
    console.log('beforeCreate()')
  },
  created () {
    console.log('created()')
  },
  beforeMount () {
    console.log('beforeMount()')
  },
  mounted () {
    console.log('mounted()')
  },
  beforeUpdate () {
    console.log('beforeUpdate()')
  },
  updated () {
    console.log('updated()')
  },
  beforeDestroy () {
    console.log('beforeDestroy()')
  },
  destroyed () {
    console.log('destroyed()')
  }
}
</script>

<style>
</style>
