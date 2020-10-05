import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Cars from "@/components/Cars";
import Model from "@/components/Model";
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
    {
      path: "/cars/model",
      name: "Model",
      component: Model
    }
  ]
});
