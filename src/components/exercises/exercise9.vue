<template>
  <div class="exercise-9">
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <FullName v-model="fullname"></FullName>
                  <div class="form-group">
                    <label for="email">email</label>
                    <input v-model="email" id="email" type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="password">password</label>
                    <input v-model="password" id="firstName" type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="yes">
                       <input v-model="saveData" value="yes" id="yesSave" type="radio"> Yes
                     </label>
                    <label for="no">
                      <input v-model="saveData" value="no" id="noSave" type="radio"> No
                    </label>
                  </div>
                  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                      <button @click.prevent="submitted()" class="btn btn-primary">Submit!</button>
                  </div>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullname}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{saveData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FullName from './fullName.vue'
export default {
  data () {
    return {
      'fullname': 'firstnoem secondNome',
      'email': '',
      'password': '',
      'saveData': false,
      'isSubmitted': false
    }
  },
  components: {
    FullName
  },
  methods: {
    submitted () {
      this.isSubmitted = true
    }
  }
}
</script>

<style>
</style>
