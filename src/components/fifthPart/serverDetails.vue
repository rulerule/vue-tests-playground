<template>
    <div class="col-xs-12 col-sm-6">
      <p v-if="!server">Please Select a Server</p>
      <p v-else>Server: {{server.id}} Status: {{server.status}} </p>
      <button v-if="server" @click="setServerStatusToNormal()"> Set Server Status To Normal </button>
    </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  data () {
    return {
      server: null
    }
  },
  created () {
    eventBus.$on('serverSelected', (data) => {
      this.server = data
    })
  },
  methods: {
    setServerStatusToNormal () {
      this.server.status = 'Normal'
    }
  }
}
</script>

<style>

</style>
