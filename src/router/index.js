import Vue from "vue";
import VueRouter from "vue-router";
import FavMemeView from "../views/FavMemeView.vue";
import LayoutMemes from "@/layouts/LayoutMemes.vue";
import LoginLayout from "@/layouts/LoginLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/fav-meme",
    name: "FavMemeView",
    meta: {
      layout: LayoutMemes,
    },
    component: FavMemeView,
  },
  {
    path: "/meme-home",
    name: "MemeHome",
    meta: {
      layout: LayoutMemes,
    },
    component: () => import("../views/MemeHome.vue"),
  },
  {
    path: "/",
    name: "LandingPage",
    meta: {
      layout: LoginLayout,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LandingPage.vue"),
  },

  {
    path: "/login",
    name: "Login",
    meta: {
      layout: LoginLayout,
    },
    component: () => import("../views/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    meta: {
      layout: LoginLayout,
    },
    component: () => import("../views/Register.vue"),
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
});

export default router;
