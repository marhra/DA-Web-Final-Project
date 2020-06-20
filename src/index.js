import Vue from 'vue';
import App from './App.vue';
import './index.html';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
});