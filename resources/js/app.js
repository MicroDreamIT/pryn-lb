
require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'

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
    }
});
