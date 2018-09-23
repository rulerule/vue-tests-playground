// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
export const eventBus = new Vue({
  methods: {
    changeAge (age) {
      this.$emit('ageWasEdited', age)
    }
  }
})

export const quoteBus = new Vue({
})

Vue.directive('highlight', {
  bind (el, binding, vnode) {
    // el.style.backgroundColor = 'green'
    // el.style.backgroundColor = binding.value
    var delay = 0
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    if (binding.modifiers['blink']) {
      let mainColor = binding.value.mainColor
      let secondColor = binding.value.secondColor
      let currentColor = mainColor
      setTimeout(() => {
        setInterval(() => {
          currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor
          if (binding.arg === 'background') {
            el.style.backgroundColor = currentColor
          } else {
            el.style.color = currentColor
          }
        }, binding.value.blinkTime)
      }, delay)
    } else {
      setTimeout(() => {
        if (binding.arg === 'background') {
          el.style.backgroundColor = binding.value
        } else {
          el.style.color = binding.value
        }
      }, delay)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
