import Vue from "vue";
import Vuex from "vuex";

import Memes from "./memes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Memes,
  },
});
