import cryptoApi from "../../api/crypto";
import { CRYPTO_API } from "../../constants";

const state = {
  cryptoData: [],
  showLoading: true,
};

const getters = {
  cryptoValues: (state) => state.cryptoData,
  showLoading: (state) => state.showLoading,
};

const actions = {
  fetchCryptoCurrencies: async ({ commit }) => {
    const {
      data: { data },
    } = await cryptoApi.fetchData(CRYPTO_API.BASE_URL, CRYPTO_API.CRYPTO_PATH);

    commit("setCryptoCurrencyValues", data);
    commit("setShowLoading", false);
  },
};

const mutations = {
  setCryptoCurrencyValues: (state, data) => {
    state.cryptoData = data;
  },
  setShowLoading: (state, data) => {
    state.showLoading = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
