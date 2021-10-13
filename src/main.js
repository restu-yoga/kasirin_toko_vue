import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes =[
  { path: '/table', component:require('./components/Table.vue').default },
  { path: '/table1', component:require('./components/Table1.vue').default },
  { path: '/table2', component:require('./components/Table2.vue').default },
  { path: '/table3', component:require('./components/Table3.vue').default },
  { path: '/table4', component:require('./components/Table4.vue').default },
  { path: '/table5', component:require('./components/Table5.vue').default },
  { path: '/table6', component:require('./components/Table6.vue').default }

]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



