<template>
<div class="animations">
    <h1> CSS ANIMATIONS </h1>
    <hr>
    <select v-model="alertAnimation" class="form-control">
      <option value="fade"> Fade </option>
      <option value="slide"> Slide </option>
    </select>
    <hr>
    <button class="btn btn-primary" @click="show = !show">Show Alert</button>
    <transition :name="alertAnimation">
      <div class="alert alert-info" v-if="show">This is some Info</div>
    </transition>
    <transition :name="alertAnimation">
      <div class="alert alert-info" v-if="show">This is some Info</div>
    </transition>
    <transition
                appear
                enter-active-class="animated bounce"
                leave-active-class="animated shake"
                type="animation">
      <div class="alert alert-info" v-if="show">This is some Info</div>
    </transition>
    <br> <br>
    <!-- <transition :name="alertAnimation" mode="out-in">
      <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
      <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
    </transition> -->
    <hr>
    <hr>
    <hr>
    <hr>
    <h1> Javascript Animations </h1>
    <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
    <br><br>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false">
      <div v-if="load" style="width: 300px; height:100px; background-color:green;"></div>
    </transition>
  <GoBack></GoBack>
</div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {
      show: false,
      alertAnimation: 'fade',
      load: true,
      elementWidth: 100
    }
  },
  components: {
    GoBack
  },
  methods: {
    beforeEnter (el) {
      console.log('before enter')
      this.elementWidth = 100
      el.style.width = this.elementWidth + 'px'
    },
    enter (el, done) {
      console.log('enter')
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterEnter (el) {
      console.log('after enter')
    },
    enterCancelled (el) {
      console.log('enter cancelled')
    },
    beforeLeave (el) {
      console.log('before leave')
      this.elementWidth = 300
      el.style.width = this.elementWidth + 'px'
    },
    leave (el, done) {
      console.log('leave')
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterLeave (el) {
      console.log('after leave')
    },
    leaveCancelled (el) {
      console.log('leave cancelled')
    }
  }
}
</script>

<style lang="scss">
  .fade-enter {
    opacity:0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity:0;
  }

  .slide-enter {
    opacity:0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition:opacity 0.5s;
  }

  .slide-leave {
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition:opacity 1s;
    opacity:0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform:translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform:translateY(20px);
    }
  }
</style>
