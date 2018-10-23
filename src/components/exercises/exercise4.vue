<template>
    <div id="exercise">
      <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
      <div>
        <button @click="startEffect">Start Effect</button>
        <div id="effect" :class="selectedEffect"></div>
      </div>
      <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
      <div :class="[classColor, classSize]">I got no class :(</div>
      <!-- 3) Let the user enter a class (create some example classes) and attach it -->
      <div>
        <input @keyup="handleInputClasses" type="text">
        <div :class="userCreatedClass"> user Input classes</div>
      </div>
      <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
      <div>
        <input @keyup="handleSingleClass" placeholder="type a class" type="text">
        <input maxlength="1" @keypress="handleChoice" placeholder="red text? y/n?" type="text">
        <div :class="[userSingleClass, {redColor: redActive}]">user options</div>
      </div>
      <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
      <div>
        <input @keyup="handleProperty" placeholder="type a property" type="text">
        <div :style="{color: userColorChoice}"> User Color Choice</div>
      </div>
      <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
      <div>
        <button v-on:click="startProgress">Start Progress</button>
        <div class="unprogress">
            <span class="textProgress">{{ progressWidth }}% </span>
            <div :style="{width:progressWidth + 'px'}" :class="{progress: progressActive}"></div>
        </div>
      </div>
    <GoBack></GoBack>
    </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  name: 'Exercise4',
  data () {
    return {
      selectedEffect: 'highlight',
      effectAlreadyRunning: false,
      classColor: 'redColor',
      classSize: 'big',
      userCreatedClass: '',
      userSingleClass: '',
      redActive: false,
      userColorChoice: '',
      progressActive: false,
      progressWidth: 0
    }
  },
  components: {
    GoBack
  },
  methods: {
    startEffect: function () {
      setTimeout(function () {
        if (this.selectedEffect === 'highlight') {
          this.selectedEffect = 'shrink'
        } else {
          this.selectedEffect = 'highlight'
        }
        this.startEffect()
      }.bind(this), 500)
    },
    handleInputClasses: function (event) {
      this.userCreatedClass = event.target.value.split(' ')
    },
    handleSingleClass: function (event) {
      this.userSingleClass = event.target.value.split(' ')[0]
    },
    handleChoice: function (event) {
      let choice = event.key
      let regex = new RegExp('^[yYnN]$')
      if (regex.test(choice)) {
        this.redActive = choice.toUpperCase() === 'Y'
      } else {
        event.preventDefault()
      }
    },
    handleProperty: function (event) {
      this.userColorChoice = event.target.value
    },
    startProgress: function () {
      this.progressActive = true
      if (this.progressWidth === 100) return
      setTimeout(function () {
        this.progressWidth += 1
        this.startProgress()
      }.bind(this), 100)
    }
  }
}
</script>

<style scoped>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}
.big {
    font-size:24px;
}
.redColor {
    color:red;
}
.unprogress {
    background-color: gray;
    width:100px;
    height:20px;
    position:relative;
    z-index:1;
    float:left;
    text-align:center;
    line-height:20px;
}
.progress {
    position:absolute;
    top:0;
    left:0;
    z-index:2;
    height:25px;
    background-color: green;
}
.textProgress {
    position:absolute;
    top:2px;
    left:40px;
    color:black;
    font-size:12px;
    font-weight:bold;
    z-index:3;
}
</style>
