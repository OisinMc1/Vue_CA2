//Imports required frameworks

require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)

//Starts a new Vue application
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
