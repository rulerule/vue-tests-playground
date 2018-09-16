<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>name: {{ name }} </p>
    <p>age: {{ age }} </p>
    <button @click="changeName()">Change my Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :name="name" :userAge="age" @nameReset="name = $event"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './userDetail.vue'
import UserEdit from './userEdit.vue'

export default {
  data () {
    return {
      name: 'badjoras',
      age: 25
    }
  },
  methods: {
    changeName () {
      this.name = 'changedName'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
