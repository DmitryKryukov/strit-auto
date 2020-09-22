import Vue from 'vue'
import Vuex from 'vuex'
import discounts from './modules/discounts'
import brands from './modules/brands'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    discounts: discounts,
    brands: brands,
  },
});
