import Vue from "vue";
import Vuex from 'vuex';
import App from "./App";
import router from "./router";
import Fragment from "vue-fragment";
import store from '@/store';

Vue.use(Vuex);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App }
});
