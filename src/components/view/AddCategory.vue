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
                    <label for="exampleInputEmail1">Store Name</label>
                    <select class="form-control select2" style="width: 100%;" v-model="form.store_id">
                       <option value=""  disabled selected>select your store</option>
                      <option v-for="(store, index) in user_store" :key="index"> {{ store.store_id }}
                        {{ store.store.name }}</option>
                    </select>
                  </div>
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
  import Swal from 'sweetalert2';


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
          store_id: "",

        },
        user_store: this.$store.state.auth.user.user_store,
        categories: [],
      };
    },
    methods: {
      categoryForm() {
        let formData = new FormData();
        formData.set("name", this.form.name);
        formData.set("store_id", this.form.store_id);
        axios
          .post("https://api-kasirin.jaggs.id/api/category/store", formData)
          .then((response) => {
            console.log(response);
            Swal.fire(
                  "Berhasil",
                  "Kategori Berhasil Ditambahkan",
                  "success"
                );
            this.$router.push({
              name: 'Category'
            })
          })
          .catch((err) => {
            console.log(err)
             Swal.fire(
                  "Gagal",
                  "Kategori Gagal Ditambahkan",
                  "warning"
                );
          });
      }
    }
  }
</script>