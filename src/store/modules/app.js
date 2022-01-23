/*eslint-disable*/
import router from "../../router";

const state = {};

const getters = {};

const actions = {
  redirectToPath: ({ commit }, path) => {
    router.push({ path });
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
