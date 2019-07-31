import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
import * as modules from "./modules";
export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState({
      paths: ["auth"]
    })
  ]
});
