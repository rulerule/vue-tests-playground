<template>
<div class="connecting-to-server container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1> SERVER SETUP </h1>
      <p> firebase: https://console.firebase.google.com/ </p>
      <p> server name: vue-course-aux </p>
      <h1> POST TEST </h1>
      <div class="form-group">
        <label>Username</label>
        <input class="form-control" v-model="user.username" type="text">
      </div>
      <div class="form-group">
        <label>Mail</label>
        <input class="form-control" v-model="user.email" type="text">
        <br>
        <button @click="submit()" class="btn btn-primary">Submit</button>
      </div>
      <hr>
      <h1> GET TEST </h1>
      <input class="form-control" type="text" v-model="node">
      <button class="btn btn-primary" @click="fetchData()"> Get Data </button>
      <br>
      <br>
      <ul class="list-group">
        <li class="list-group-item" v-for="u in users" :key="u.username">{{ u.username }} - {{u.email}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resource: {},
      node: 'data'
    }
  },
  methods: {
    submit () {
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //     alert('success')
      //   })
      // this.resource.save({}, this.user)
      this.resource.saveAlt(this.user)
    },
    fetchData () {
      // this.$http.get('data.json')
      //   .then(response => {
      //     alert('success')
      //     return response.json()
      //   })
      //   .then(data => {
      //     const resultArray = []
      //     for (let key in data) {
      //       resultArray.push(data[key])
      //     }
      //     this.users = resultArray
      //   })
      this.resource.getData({node: this.node})
        .then(response => {
          alert('success')
          return response.json()
        })
        .then(data => {
          const resultArray = []
          for (let key in data) {
            resultArray.push(data[key])
          }
          this.users = resultArray
        })
    }
  },
  created () {
    const customActions = {
      saveAlt: {method: 'POST', url: 'alternative.json'},
      getData: {method: 'GET'}
    }
    this.resource = this.$resource('{node}.json', {}, customActions)
  }
}
</script>

<style lang="scss">
</style>
