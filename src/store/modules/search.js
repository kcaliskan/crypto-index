/*eslint-disable*/
const state = {
  searchTerm: "",
};

const getters = {
  searchTerm: (state) => state.searchTerm,
};

const actions = {
  setSearchTerm: async ({ dispatch, commit, getters, rootGetters }, value) => {
    commit("updateSearchTerm", value);
    await dispatch("crypto/fetchCryptoCurrencies", null, { root: true });
    dispatch("crypto/setShowLoading", true, { root: true });
    const cryptoData = rootGetters["crypto/cryptoValues"];

    const searchResult = cryptoData.filter((crypto) => {
      return crypto.name.toLowerCase().trim() === value.toLowerCase().trim();
    });

    commit("updateSearchResult", searchResult);
    dispatch("crypto/setShowLoading", false, { root: true });
  },
};

const mutations = {
  updateSearchTerm: (state, value) => {
    state.searchTerm = value;
  },

  updateSearchResult: (state, value) => {
    state.searchResult = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};