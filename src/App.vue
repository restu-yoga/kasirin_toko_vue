<template>
<div>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
  <router-view></router-view>
  <foot-bar></foot-bar>
  </div>
</template>

<script>
import NavBar from './components/layout/Navbar.vue'
import SideBar from './components/layout/Sidebar.vue'
import FootBar from './components/layout/Footbar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    FootBar
    }
}
</script>