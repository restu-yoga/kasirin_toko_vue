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
                <h3 class="card-title">Data Contact</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Contact Name</th>
                    <th>Image</th>
                    <th>Content</th>
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
    </section>
    </div>
    <foot-bar></foot-bar>
</div>
</template>
<script>
import NavBar from '../layout/Navbar.vue'
import SideBar from '../layout/Sidebar.vue'
import FootBar from '../layout/Footbar.vue'

export default {
  components: {
    NavBar,
    SideBar,
    FootBar
    }
}
</script>