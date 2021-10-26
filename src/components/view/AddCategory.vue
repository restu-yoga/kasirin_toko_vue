<template>
<div>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
        <div class="content-wrapper">
        <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="categoryForm">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Category Name</label>
                    <input type="text" class="form-control" v-model="form.name" id="name" placeholder="Enter category">
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
          name: ""
        }
      };
},
 methods: {
      categoryForm() {
      let formData = new FormData();
      formData.set("name", this.form.name);
      axios
        .post("", formData)
        .then((response) => {
         console.log(response);
         this.$router.push({
              name: 'Category'
            })
        })
        .catch((err) => {
        console.log(err)
        });
      }
    }
}
</script>