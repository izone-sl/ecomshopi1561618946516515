import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllProduct from "../views/AllProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/allproducts",
    name: "AllProduct",
    component: AllProduct,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
