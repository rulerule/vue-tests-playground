<template>
<div class="connecting-to-server container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
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
      <button class="btn btn-primary" @click="fetchData()"> Get Data </button>
      <br>
      <br>
      <ul class="list-group">
        <li class="list-group-item" v-for="u in users" :key="u.username">{{ u.username }} - {{u.email}}</li>
      </ul>
    </div>
  </div>
  <GoBack></GoBack>
</div>
</template>

<script>
import GoBack from '../general/goBackComponent.vue'
export default {
  data () {
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    }
  },
  components: {
    GoBack
  },
  methods: {
    submit () {
      this.$http.post('https://vue-course-aux.firebaseio.com/data.json', this.user)
        .then(response => {
          alert('success')
        })
    },
    fetchData () {
      this.$http.get('https://vue-course-aux.firebaseio.com/data.json')
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
  }
}
</script>

<style lang="scss">
</style>
