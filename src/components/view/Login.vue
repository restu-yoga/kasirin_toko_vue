<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <img src="/assets/img/kasirin.png" style="border-radius:50%;" alt="">
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
            {{ error[0] }}
          </div>
          <form @submit.prevent="userLogin" method="post">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="form.email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model='form.password'>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <p class="mb-0 mt-3">
            <router-link to="register" class="text-center">Register a new membership</router-link>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>
<script>
   export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        errors: null
      }
    },
    methods: {
      userLogin() {
        this.$store.dispatch('login', this.form)
          .then(response => {
            console.log(response)
            this.$router.push({
              name: 'Home'
            })
          }).catch(error => {
            this.errors = error.response.data.errors
          })
      }
    }
  }
</script>