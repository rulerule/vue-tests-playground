<template>
  <div class="monster-game-official">
    <div class="project-monster-game-official-container">
      <section class="row">
          <div class="small-6 columns">
              <h1 class="text-center">YOU</h1>
              <div class="healthbar">
                  <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;">

                  </div>
              </div>
          </div>
          <div class="small-6 columns">
              <h1 class="text-center">MONSTER</h1>
              <div class="healthbar">
                  <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;">

                  </div>
              </div>
          </div>
      </section>
      <section class="row controls">
          <div class="small-12 columns">
              <button id="start-game">START NEW GAME</button>
          </div>
      </section>
      <section class="row controls">
          <div class="small-12 columns">
              <button id="attack">ATTACK</button>
              <button id="special-attack">SPECIAL ATTACK</button>
              <button id="heal">HEAL</button>
              <button id="give-up">GIVE UP</button>
          </div>
      </section>
      <section class="row log">
          <div class="small-12 columns">
              <ul>
                  <li>

                  </li>
              </ul>
          </div>
      </section>
    </div>
    <div class="button-container">
      <button class="button-navigation" @click="backToList()"> Back To List </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    backToList () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/foundation.min.css";
@import "../../styles/app.css";
</style>
