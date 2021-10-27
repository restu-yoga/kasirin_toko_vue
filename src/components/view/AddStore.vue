<template>
<div>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
        <div class="content-wrapper">
        <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="storeForm">
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Store Name</label>
                    <input type="text" class="form-control" v-model="form.name" id="name" placeholder="Enter name">
                  </div>
                  <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" v-model="form.address" id="address" placeholder="Enter address">
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    </div>
    <foot-bar></foot-bar>
</div>
</template>

<script>
import NavBar from '../layout/Navbar.vue'
import SideBar from '../layout/Sidebar.vue'
import FootBar from '../layout/Footbar.vue'
import axios from 'axios'

export default {
  components: {
    NavBar,
    SideBar,
    FootBar
    },
     data() {
      return {
        errors: null,
        form: {
          name: "",
          address: "",
          user_id: localStorage.getItem('id'),
        }
      };
},
 methods: {
      storeForm() {
      let formData = new FormData();
      formData.set("name", this.form.name);
      formData.set("address", this.form.address);
      formData.set("user_id", this.form.user_id);
      axios
        .post("https://api-kasirin.jaggs.id/api/stores", formData)
        .then((response) => {
         console.log(response);
         this.$router.push({
              name: 'Store'
            })
        })
        .catch((err) => {
        console.log(err)
        });
      }
    }
}
</script>