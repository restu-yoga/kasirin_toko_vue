<template>
<div>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
  <router-view></router-view>
  <foot-bar></foot-bar>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import SideBar from './components/Sidebar.vue'
import FootBar from './components/Footbar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    FootBar
    }
}
</script>