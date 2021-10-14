<template>
  <div>
     <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link">
      <img src="/assets/img/kasirin.webp" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Kasirin Toko</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="/assets/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
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
              <router-link to="faq" class="nav-link">
                <i class="fas fa-comments nav-icon"></i>
                <p>Faq</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="contact" class="nav-link">
                <i class="fas fa-phone-alt nav-icon"></i>
                <p>Contact Us</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="policy" class="nav-link">
                <i class="fas fa-book-open nav-icon"></i>
                <p>Privacy and Policy</p>
              </router-link>
            </li>
             <!-- <li class="nav-item" style="visibility: hidden;">
              <router-link to="hello-world" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Contact Us</p>
              </router-link>
            </li>
            <li class="nav-item" style="visibility: hidden;">
              <router-link to="table" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Privacy and Policy</p>
              </router-link>
            </li>
             <li class="nav-item" style="visibility: hidden;">
              <router-link to="hello-world" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Contact Us</p>
              </router-link>
            </li>
            <li class="nav-item" style="visibility: hidden;">
              <router-link to="table" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Privacy and Policy</p>
              </router-link>
            </li>
             <li class="nav-item" style="visibility: hidden;">
              <router-link to="hello-world" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Contact Us</p>
              </router-link>
            </li>
            <li class="nav-item" style="visibility: hidden;">
              <router-link to="table" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Privacy and Policy</p>
              </router-link>
            </li>
             <li class="nav-item" style="visibility: hidden;">
              <router-link to="hello-world" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Contact Us</p>
              </router-link>
            </li>
            <li class="nav-item" style="visibility: hidden;">
              <router-link to="table" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Privacy and Policy</p>
              </router-link>
            </li> -->
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