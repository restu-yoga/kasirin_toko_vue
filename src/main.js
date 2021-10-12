import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

let routes =[
  { path: '/table', component:require('./components/Table.vue').default },
  { path: '/hello-world', component:require('./components/HelloWorld.vue').default }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



