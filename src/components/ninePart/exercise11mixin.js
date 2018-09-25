export const exercise11Mixin = {
  computed: {
    reversedText () {
      return this.text.split('').reverse().join('')
    },
    lengthText () {
      return `${this.text2} (${this.text2.length})`
    }
  }
}
