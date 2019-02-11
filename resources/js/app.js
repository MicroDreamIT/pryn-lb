
require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
const Swal = require('sweetalert2')
Vue.use(VueRouter)
Vue.use(Vuetify, {iconfont: 'mdi'})
Vue.use(VeeValidate)

import {default as adminRoute} from './routes/route'

let rout = []
const routes = rout.concat(
    adminRoute
)

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('data-table', require('./components/dataTable').default);


const app = new Vue({
    router,
    el: '#app',
    delimiters: ['{', '}'],

    data:{
        message:'Hi this is testing',
        drawer: null,
    },
    methods:{
        successMessage(data){
            Swal.fire({
              position: 'center',
              type:  data.type,
              title: data.message,
              showConfirmButton: false,
              timer: 1500
            })

        }
    },
    mounted(){

            window.addEventListener('load', function() {
                 let preload  =  document.getElementById("preload");
                 preload.style.display = "none";
            })
    }

});
