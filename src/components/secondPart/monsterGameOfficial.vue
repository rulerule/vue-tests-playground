<template>
  <div class="monster-game-official">
    <div class="project-monster-game-official-container">
      <section class="row">
          <div class="small-6 columns">
              <h1 class="text-center">YOU</h1>
              <div class="healthbar">
                  <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;" :style="{width: playerHealth + '%'}">
                    {{ playerHealth }}
                  </div>
              </div>
          </div>
          <div class="small-6 columns">
              <h1 class="text-center">MONSTER</h1>
              <div class="healthbar">
                  <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;" :style="{width: monsterHealth + '%'}">
                    {{monsterHealth}}
                  </div>
              </div>
          </div>
      </section>
      <section class="row controls" v-if="!gameIsRunning">
          <div class="small-12 columns">
              <button id="start-game" @click="startGame" >START NEW GAME</button>
          </div>
      </section>
      <section class="row controls" v-else>
          <div class="small-12 columns">
              <button id="attack" @click="attack">ATTACK</button>
              <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
              <button id="heal" @click="heal">HEAL</button>
              <button id="give-up" @click="giveUp">GIVE UP</button>
          </div>
      </section>
      <section class="row log" v-if="turns.length > 0">
          <div class="small-12 columns">
              <ul>
                  <li v-for="turn in turns" :key="turn" :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}">
                    {{turn.text}}
                  </li>
              </ul>
          </div>
      </section>
    </div>
    <GoBack></GoBack>
  </div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      turns: []
    }
  },
  components: {
    GoBack
  },
  methods: {
    startGame () {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
      this.turns = []
    },
    attack () {
      let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damage}`
      })
      if (this.checkWin()) return
      this.monsterAttacks()
    },
    specialAttack () {
      let damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster hard for ${damage}`
      })
      if (this.checkWin()) return
      this.monsterAttacks()
    },
    heal () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.turns.unshift({
        isPlayer: true,
        text: `Player heals himself for 10`
      })
      this.monsterAttacks()
    },
    giveUp () {
      this.gameIsRunning = false
    },
    calculateDamage (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    monsterAttacks () {
      let damage = this.calculateDamage(5, 15)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damage}`
      })
      this.checkWin()
    },
    checkWin () {
      if (this.monsterHealth <= 0) {
        if (confirm('you won! new game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if (this.playerHealth <= 0) {
        if (confirm('You Lost! Play Again?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/foundation.min.css";
@import "../../styles/app.css";
</style>
