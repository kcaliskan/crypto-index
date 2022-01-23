<template>
  <div v-if="!!cryptoPortfolioFullData.length">
    <CryptoList
      :cryptoData="cryptoPortfolioFullData"
      :fetchErrorMessage="fetchErrorMessage"
      :tableTitles="tableTitles"
      :tableDataFields="tableDataFields"
      :tableDataSymbols="tableDataSymbols"
      :tableDataPrecisions="tableDataPrecisions"
      :showPortfolio="true"
    />
  </div>
  <div v-else>
    <div class="container">
      <div class="row wrapper-row mt-5 p-5 align-items-center">
        <div class="col-6 text-center">
          <h1 class="mb-4">
            You don't have any cryptocurrency in your portfolio.
          </h1>
          <router-link
            :to="componentPaths.TRENDING_LISTINGS"
            class="btn btn-primary"
            >Check trending cryptos to add your portfolio</router-link
          >
        </div>
        <div class="col-6 text-center">
          <img
            src="../assets/img/no-portfolio.png"
            class="img-fluid portfolio-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList";

import {
  PORTFOLIO,
  CRYPTO_TABLE_TITLES,
  CRYPTO_TABLE_DATA_FIELDS,
  CRYPTO_DATA_SYMBOLS,
  CRYPTO_DATA_PRECISIONS,
} from "../constants";

import { componentPaths } from "../router/modules/routableComponents";

export default {
  name: "Portfolio",
  components: {
    CryptoList,
  },
  data() {
    return {
      componentPaths,
      fetchErrorMessage: PORTFOLIO.fetchErrorMessage,
      tableTitles: CRYPTO_TABLE_TITLES,
      tableDataFields: CRYPTO_TABLE_DATA_FIELDS,
      tableDataSymbols: CRYPTO_DATA_SYMBOLS,
      tableDataPrecisions: CRYPTO_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions("crypto", ["fetchCryptoCurrencies", "checkLocalStoragePortfolio"]),
  },
  computed: {
    ...mapGetters("crypto", ["cryptoValues", "cryptoPortfolioFullData"]),
  },
  created() {
    this.checkLocalStoragePortfolio();

    if (!this.cryptoValues.length) {
      this.fetchCryptoCurrencies();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./Portfolio.scss";
</style>