import Vue from 'vue';
import App from './App.vue';
import './index.html';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import router from './router'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  el: '#app',
  render: h => h(App),
});