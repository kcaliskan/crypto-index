import Vue from "vue";
import Vuex from "vuex";
import crypto from "./modules/crypto";
import search from "./modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    crypto,
    search,
  },
});
