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
                  <div class="card-tools">
                    <button type="submit" class="btn btn-success" @click="showModal">
                      Add Category
                    </button>
                  </div>
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
        <!-- Modal -->
        <div class="modal fade" id="modalmuncul" tabindex="-1" role="dialog" aria-labelledby="modalmuncul1"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add Category
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <div class="modal-body">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Category Name" />
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
  import NavBar from '../layout/Navbar.vue'
  import SideBar from '../layout/Sidebar.vue'
  import FootBar from '../layout/Footbar.vue'
  import $ from "jquery";


  export default {
    components: {
      NavBar,
      SideBar,
      FootBar
    },
      methods: {
        showModal() {
            $("#modalmuncul").modal("show");
        },
      }
  }
</script>