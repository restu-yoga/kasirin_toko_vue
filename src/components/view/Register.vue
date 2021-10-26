<template>
  <div class="hold-transition register-page">
    <div class="register-box">
      <div class="register-logo">
        <img src="/assets/img/kasirin.png" style="border-radius:50%;" alt="">
      </div>

      <div class="card">
        <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
          {{ error[0] }}
        </div>
        <div class="card-body register-card-body">
          <p class="login-box-msg">Register a new membership</p>

          <form @submit.prevent="registerForm">
            <div class="input-group mb-3">
              <input v-model="form.name" type="text" class="form-control" placeholder="Full name">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input v-model="form.email" type="email" class="form-control" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input v-model="form.address" type="address" class="form-control" placeholder="Address">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-map-marker-alt"></span>
                </div>
              </div>
            </div>
             <div class="input-group mb-3">
              <input v-model="form.phone" type="phone" class="form-control" placeholder="Phone">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-phone"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" v-model="form.password" class="form-control" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
             <div class="input-group">
                  <input
                    type="file"
                    accept="avatar/*"
                    class="form-control"
                    @change="onImageSelected"
                  />
                </div>
             <div class="form-group mt-2">
              <input type="radio" style="margin-right:5px;" id="male" v-model="form.gender" value="male">
              <label for="male">Male</label><br>
              <input type="radio" style="margin-right:5px;" id="female" v-model="form.gender" value="female">
              <label for="female">Female</label>
            </div>
            <div class="row">
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Register</button>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <router-link to="/" class="text-center" style="margin-top:10px;">I already have a membership</router-link>
        </div>
        <!-- /.form-box -->
      </div><!-- /.card -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        errors: null,
        form: {
          name: "",
          email: "",
          address: "",
          gender: "",
          phone: "",
          avatar: "",
          password: "",
        }
      };
    },
    methods: {
      onImageSelected(event) {
      this.form.avatar = event.target.files[0];
    },
      registerForm() {
      let formData = new FormData();
      formData.set("name", this.form.name);
      formData.set("email", this.form.email);
      formData.set("address", this.form.address);
      formData.set("gender", this.form.gender);
      formData.set("phone", this.form.phone);
      formData.set("avatar", this.form.avatar);
      formData.set("password", this.form.password);
      axios
        .post("https://api-kasirin.jaggs.id/api/register", formData)
        .then((response) => {
         console.log(response);
         this.$router.push({
              name: 'Login'
            })
        })
        .catch((err) => {
        console.log(err)
        });
      }
    }
  }
</script>