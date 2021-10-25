import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import Vuex from 'vuex'
import { setHeaderToken } from './utils/auth'



Vue.use(Vuex)

axios.defaults.baseURL = 'https://api-kasirin.jaggs.id/api'

Vue.config.productionTip = false

const token = localStorage.getItem('access_token');
if (token) { 
  setHeaderToken(token) 
} 

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

let routes =[
  { path: '/home', name: 'Home', component:require('./components/view/Home.vue').default },
  { path: '/store', component:require('./components/view/Store.vue').default },
  { path: '/product', component:require('./components/view/Product.vue').default },
  { path: '/category', component:require('./components/view/Category.vue').default },
  { path: '/transaction', component:require('./components/view/Transaction.vue').default },
  { path: '/faq', component:require('./components/view/Faq.vue').default },
  { path: '/contact', component:require('./components/view/Contact.vue').default },
  { path: '/policy', component:require('./components/view/Policy.vue').default },
  { path: '/', name: 'Login', component:require('./components/view/Login.vue').default },
  { path: '/register', component:require('./components/view/Register.vue').default }
]

const router = new VueRouter({
  routes
})


store.dispatch('get_user', token)
.then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}).catch((error) => {
  console.error(error);
})



