import Vue from 'vue';
import App from './App.vue';
import './index.html';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue),
  Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  render: h => h(App),
});