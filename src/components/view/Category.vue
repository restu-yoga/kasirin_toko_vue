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
                  <router-link to="addcategory" class="card-tools"> 
                    <button
                        class="btn btn-success"
                    >
                        Add Category
                    </button>
                </router-link>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table id="datatable" class="table table-bordered table-striped">
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
                           <a href="#" @click="deleteData(item.id)" class="text-danger">
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
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import "datatables.net-dt/js/dataTables.dataTables"
  import "datatables.net-dt/css/jquery.dataTables.min.css"
  import $ from 'jquery';
  import Swal from 'sweetalert2';


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

  methods: {
     load(){
         axios
        .get("https://api-kasirin.jaggs.id/api/category?store_id=1", {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
          }
        })
        .then(({
          data
        }) => {
          this.categories = data.data;
        })
        .catch((err) => {
          console.log(err)
        });
    },
     deleteData(id) {
        Swal.fire({
          title: "Anda Yakin Ingin Menghapus Data Ini ?",
          text: "Klik Batal untuk Membatalkan Penghapusan",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Batal",
          confirmButtonText: "Hapus"
        }).then(result => {
          if (result.value) {
            axios.delete('https://api-kasirin.jaggs.id/api/category/delete/' + id)
              .then(res => {
                Swal.fire(
                  "Terhapus",
                  "Kategori Anda Sudah Terhapus",
                  "success"
                );
                this.load();
                console.log(res);
              })
              .catch((err) => {
                Swal.fire(
                  "Gagal",
                  "Kategori Anda Gagal Terhapus",
                  "warning"
                );
                console.log(err)
              })
          } else {
            Swal.fire(
              "Gagal",
              "Kategori Anda Gagal Terhapus",
              "warning"
            );
          }
        })
      }
  },

    mounted() {
     this.load(
       axios
        .get("https://api-kasirin.jaggs.id/api/category?store_id=1", {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
          }
        })
        .then(({
          data
        }) => {
          this.categories = data.data;
            $(function () {
            $('#datatable').DataTable({
              language: {
                info: "",
                paginate: {
                  first: "first",
                  previous: "<i class='fa fa-chevron-left'></i>",
                  next: "<i class='fa fa-chevron-right'></i>",
                  last: "last"
                }
              }
            })
          })
        })
        .catch((err) => {
          console.log(err)
        })
     )
    }
  }
</script>