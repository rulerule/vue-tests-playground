<template>
  <div class="monster-game">
    <div class="project-container">
      <div class="player-box game-box">
        <div class="player-name name-displayer">{{playerName}}</div>
        <div class="hp-color-background">
          <div class="player-hp hp-displayer" :style="{width: playerHp + '%'}">{{playerHp}}</div>
        </div>
      </div>
      <div class="monster-box game-box">
        <div class="monster-name name-displayer">{{monsterName}}</div>
        <div class="hp-color-background">
          <div class="monster-hp hp-displayer" :style="{width: monsterHp + '%'}">{{monsterHp}}</div>
        </div>
      </div>
      <div class="interaction-box">
        <button v-if="!gameStarted" class="start-game" @click="gameStarted = !gameStarted"> Start Game </button>
        <button v-if="gameStarted" class="atack" @click="atack()"> ATACK </button>
        <button v-if="gameStarted" class="special-atack" @click="specialAtack()"> SPECIAL ATACK </button>
        <button v-if="gameStarted" class="heal" @click="heal()"> HEAL </button>
        <button v-if="gameStarted" class="give-up" @click="endGame()"> GIVE UP </button>
      </div>
      <div v-if="gameStarted" class="information-box">
        <div class="details" v-for="action in actions" :key="action">{{action.text}}</div>
      </div>
    </div>
    <GoBack></GoBack>
  </div>
</template>

<script>
import GoBack from '../../general/goBackComponent.vue'
export default {
  data () {
    return {
      playerName: 'badjoras',
      monsterName: 'diModem',
      playerHp: 100,
      monsterHp: 100,
      gameStarted: false,
      actions: []
    }
  },
  components: {
    GoBack
  },
  methods: {
    atack () {
      let val = this.generateRandomInt(1, 10)
      this.monsterHp -= val
      this.storeAction({atacker: this.playerName, defender: this.monsterName, damage: val})
      this.monsterAtack()
    },
    specialAtack () {
      let val = this.generateRandomInt(10, 20)
      this.monsterHp -= val
      this.storeAction({atacker: this.playerName, defender: this.monsterName, damage: val})
      this.monsterAtack()
    },
    heal () {
      let val = this.generateRandomInt(10, 15)
      this.playerHp + val >= 100 ? this.playerHp = 100 : this.playerHp += val
      this.storeAction({atacker: this.playerName, heal: val})
      this.monsterAtack()
    },
    endGame () {
      this.playerHp = 100
      this.monsterHp = 100
      this.gameStarted = false
      this.actions = []
    },
    monsterAtack () {
      let val = this.generateRandomInt(1, 10)
      this.playerHp -= val
      this.storeAction({atacker: this.monsterName, defender: this.playerName, damage: val})
    },
    storeAction (action) {
      if ('defender' in action) {
        action.text = `${action.atacker} hits ${action.defender} for ${action.damage}`
      } else {
        action.text = `${action.atacker} heals himself for ${action.heal}`
      }
      this.actions.push(action)
    },
    generateRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  },
  watch: {
    monsterHp () {
      if (this.monsterHp <= 0) {
        alert(`${this.playerName} win`)
        this.endGame()
      }
    },
    playerHp () {
      if (this.playerHp <= 0) {
        alert(`${this.monsterName} win`)
        this.endGame()
      }
    }
  }
}
</script>

<style lang="scss">
.project-container {
  width:80%;
  height:auto;
  margin:0 auto;
}
.game-box {
  width:50%;
  height:auto;
  float:left;
  .name-displayer {
    width:100%;
    text-align:center;
    font-size:24px;
    color:black;
    font-weight:bold;
    margin-bottom:10px;
  }
  .hp-color-background {
    width:80%;
    height:40px;
    background-color:gray;
    margin:0 auto;
    position:relative;
    .hp-displayer {
      width:100%;
      height:100%;
      line-height:40px;
      text-align:center;
      background-color:green;
      color:white;
      font-size:10px;
      float:left;
    }
  }
}
.interaction-box {
  float:left;
  width:100%;
  border: 1px solid gray;
  text-align:center;
  margin-top:25px;
  margin-bottom:25px;
  box-sizing:border-box;
  padding: 15px 0px;
  button {
    height:30px;
    min-width:25px;
    color:black;
    &.start-game {
      background-color:green;
      color:white;
    }
    &.atack {
      background-color:red;
    }
    &.special-atack {
      background-color:orange;
    }
    &.heal {
      background-color:lime;
    }
    &.give-up {
      background-color:white;
    }
  }
}
.information-box {
  width:100%;
  border: 1px solid gray;
  box-sizing:border-box;
  padding:15px;
  float:left;
  .details {
    background-color:rgba(243, 5, 5, 0.3);
    color: red;
    &:nth-of-type(odd) {
      background-color:rgba(243, 243, 243, 0.3);
      color: blue;
    }
  }
}
</style>
