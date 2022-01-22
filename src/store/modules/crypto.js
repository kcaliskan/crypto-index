import cryptoApi from "../../api/crypto";
import { CRYPTO_API } from "../../constants";

const state = {
  cryptoData: [],
  exchangeData: [],
  showLoading: true,
};

const getters = {
  cryptoValues: (state) => state.cryptoData,
  exchangeValues: (state) => state.exchangeData,
  showLoading: (state) => state.showLoading,
};

const actions = {
  fetchCryptoCurrencies: async ({ commit }) => {
    commit("setShowLoading", true);

    const {
      data: { data },
    } = await cryptoApi.fetchData(CRYPTO_API.BASE_URL, CRYPTO_API.CRYPTO_PATH);

    commit("setCryptoCurrencyValues", data);
    commit("setShowLoading", false);
  },

  fetchExchanges: async ({ commit }) => {
    commit("setShowLoading", true);

    const {
      data: { data },
    } = await cryptoApi.fetchData(
      CRYPTO_API.BASE_URL,
      CRYPTO_API.EXCHANGE_PATH
    );

    commit("setExchangeValues", data);
    commit("setShowLoading", false);
  },
};

const mutations = {
  setCryptoCurrencyValues: (state, data) => {
    state.cryptoData = data;
  },
  setExchangeValues: (state, data) => {
    state.exchangeData = data;
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
