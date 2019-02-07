
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify'


Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    delimiters: ['{', '}'],

    data:{
        message:'Hi this is testing',
        drawer: null,
    }
});
