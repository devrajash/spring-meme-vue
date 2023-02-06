import vuetify from "@/plugins/vuetify";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vue from "vue";
import vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

Vue.use(Toasted, {
  position: "top-center",
  duration: 5000,
});
Vue.use(
  VueAxios,
  axios.create({
    // baseURL: "https://spring-meme-deploy2.onrender.com/",
    baseURL: "http://192.168.43.119:8080/",
  })
);

Vue.axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("spring:access_token");
    if (token != null) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
