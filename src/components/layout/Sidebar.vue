<template v-if="isLoggedIn">
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <router-link to="/home" class="brand-link">
        <img src="/assets/img/kasirin.webp" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
          style="opacity: .8">
        <span class="brand-text font-weight-light">Kasirin Toko</span>
      </router-link>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img :src="user.avatar_url" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <router-link to="/home" class="d-block">{{user.name}}
            </router-link>

          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item menu-open">
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/home" class="nav-link">
                    <i class="fas fa-home nav-icon"></i>
                    <p>Home</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="store" class="nav-link">
                    <i class="fas fa-user-tie nav-icon"></i>
                    <p>Employee</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="store" class="nav-link">
                    <i class="fas fa-store nav-icon"></i>
                    <p>Store</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="product" class="nav-link">
                    <i class="fas fa-boxes nav-icon"></i>
                    <p>Product</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="category" class="nav-link">
                    <i class="fas fa-list-ul nav-icon"></i>
                    <p>Category</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="transaction" class="nav-link">
                    <i class="fas fa-shopping-cart nav-icon"></i>
                    <p>Transaction</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="logout">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        user: 'user',
      })
    },
    methods: {
      logout: function () {
        this.$store.dispatch("logout").then(() => {
          this.$router.push("/");
        });
      }
    }
  }
</script>