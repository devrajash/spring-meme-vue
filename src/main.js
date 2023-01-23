import vuetify from "@/plugins/vuetify";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vue from "vue";
import vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);
Vue.use(
  VueAxios,
  axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    // baseURL: "http://172.21.106.51:4200/",
  })
);

Vue.axios.interceptors.request.use(
  (config) => {
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
