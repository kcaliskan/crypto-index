import cryptoApi from "../../api/crypto";
import { CRYPTO_API, CRYPTO_PORTFOLIO } from "../../constants";

const state = {
  cryptoData: [],
  exchangeData: [],
  portfolio: [],
  showLoading: true,
};

const getters = {
  cryptoValues: (state) => state.cryptoData,
  exchangeValues: (state) => state.exchangeData,
  showLoading: (state) => state.showLoading,
  cryptoPortfolio: (state) => state.portfolio,
  cryptoPortfolioFullData: (state) => {
    return state.cryptoData.filter((crypto) =>
      state.portfolio.includes(crypto.id)
    );
  },
};

const actions = {
  setShowLoading: ({ commit }, value) => {
    commit("setShowLoading", value);
  },
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

  addToPortfolio: ({ commit }, cryptoId) => {
    const portfolio =
      JSON.parse(window.localStorage.getItem(CRYPTO_PORTFOLIO)) || [];

    portfolio.push(cryptoId);
    window.localStorage.setItem(CRYPTO_PORTFOLIO, JSON.stringify(portfolio));
    commit("updatePortfolio", portfolio);
  },

  removeFromPortfolio: ({ commit }, targetCryptoId) => {
    const portfolio = JSON.parse(window.localStorage.getItem(CRYPTO_PORTFOLIO));

    const updatedPortfolio = portfolio.filter(
      (cryptoId) => cryptoId !== targetCryptoId
    );

    window.localStorage.setItem(
      CRYPTO_PORTFOLIO,
      JSON.stringify(updatedPortfolio)
    );

    commit("updatePortfolio", updatedPortfolio);
  },

  checkLocalStoragePortfolio: ({ commit }) => {
    const portfolio =
      JSON.parse(window.localStorage.getItem(CRYPTO_PORTFOLIO)) || [];

    commit("updatePortfolio", portfolio);
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
  updatePortfolio: (state, data) => {
    state.portfolio = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
