<template>
  <div class="exercise-12">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="text-center">The Super Quiz </h1>
        </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <transition name="flip" mode="out-in">
              <component :is="mode" @answered="answered($event)" @confirmed="mode = 'Question'"></component>
            </transition>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Answer from './answer.vue'
import Question from './question.vue'
export default {
  data () {
    return {
      mode: 'Question'
    }
  },
  components: {
    Answer,
    Question
  },
  methods: {
    answered (isCorrect) {
      if (isCorrect) {
        this.mode = 'Answer'
      } else {
        alert('wrong')
        this.mode = 'Question'
      }
    }
  }
}
</script>

<style lang="scss">
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform:rotateY(0deg);
  }
}
</style>
