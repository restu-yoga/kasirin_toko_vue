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
                  <h3 class="card-title">Data Product</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Barcode</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in products" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.category_id }}</td>
                        <td> <img :src="item.image_url" class="img-circle elevation-2" alt="Product Image"></td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.stock }}</td>
                        <td>{{ item.barcode }}</td>
                        <td>
                          <a href="#"><i class="fas fa-edit blue" style="padding-right:10px;"></i></a>
                          <a href="#" class="text-danger">
                            <i class="fas fa-trash-alt red"></i></a>
                        </td>
                      </tr>
                    </tbody>
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
        products: {},
      }
    },

    mounted() {
      axios
        .get("https://api-kasirin.jaggs.id/api/product", {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')

          }
        })
        .then(({
          data
        }) => (this.products = data.data))
        .catch((err) => {
          console.log(err)
        });
    },
  }
</script>