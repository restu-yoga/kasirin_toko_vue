import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes =[
  { path: '/', component:require('./components/view/Store.vue').default },
  { path: '/store', component:require('./components/view/Store.vue').default },
  { path: '/product', component:require('./components/view/Product.vue').default },
  { path: '/category', component:require('./components/view/Category.vue').default },
  { path: '/transaction', component:require('./components/view/Transaction.vue').default },
  { path: '/faq', component:require('./components/view/Faq.vue').default },
  { path: '/contact', component:require('./components/view/Contact.vue').default },
  { path: '/policy', component:require('./components/view/Policy.vue').default },
  { path: '/login', component:require('./components/view/Login.vue').default },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



