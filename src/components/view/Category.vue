<template>
  <div>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <div class="content-wrapper">
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Data Category</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in categories" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>
                          <a href="#"><i class="fas fa-edit blue" style="padding-right:10px;"></i></a>
                          <a href="#" class="text-danger">
                            <i class="fas fa-trash-alt red"></i></a>
                        </td>
                      </tr>
                    </tbody>
                    <!-- <tfoot>
                  <tr>
                   <th>ID</th>
                    <th>Store Name</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                  </tfoot> -->
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
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
        categories: {},
      }
    },

    mounted() {
      axios
        .get("https://api-kasirin.jaggs.id/api/category", {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')

          }
        })
        .then(({
          data
        }) => (this.categories = data.data))
        .catch((err) => {
          console.log(err)
        });
    },
  }
</script>