<template>
  <div class="exercise-6">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <header>
            <h1>Server Status</h1>
          </header>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
            <Exercise6Aux
              v-for="(index, server) in 5"
              :key="server"
              v-bind:dataIndex="index">
            </Exercise6Aux>
          </ul>
        </div>
      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <footer>
          <p>All Servers are managed here</p>
        </footer>
        <goBack></goBack>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
import Exercise6Aux from './exercise6AuxComponent.vue'
export default {
  data () {
    return {}
  },
  components: {
    GoBack,
    Exercise6Aux
  }
}
</script>

<style>
</style>
