import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Cars from "@/components/Cars";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/cars",
      name: "Cars",
      component: Cars
    },
  ]
});
