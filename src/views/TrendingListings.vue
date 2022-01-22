<template>
  <CryptoList
    :cryptoData="cryptoValues"
    :fetchErrorMessage="fetchErrorMessage"
    :tableTitles="tableTitles"
    :tableDataFields="tableDataFields"
    :tableDataSymbols="tableDataSymbols"
    :tableDataPrecisions="tableDataPrecisions"
    :showPortfolio="true"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList";

import {
  TRENDING_LISTING,
  CRYPTO_TABLE_TITLES,
  CRYPTO_TABLE_DATA_FIELDS,
  CRYPTO_DATA_SYMBOLS,
  CRYPTO_DATA_PRECISIONS,
} from "../constants";

export default {
  name: "TrendingListings",
  components: {
    CryptoList,
  },
  data() {
    return {
      fetchErrorMessage: TRENDING_LISTING.fetchErrorMessage,
      tableTitles: CRYPTO_TABLE_TITLES,
      tableDataFields: CRYPTO_TABLE_DATA_FIELDS,
      tableDataSymbols: CRYPTO_DATA_SYMBOLS,
      tableDataPrecisions: CRYPTO_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions(["fetchCryptoCurrencies"]),
  },
  computed: {
    ...mapGetters(["cryptoValues", "showLoading"]),
  },
  beforeMount() {
    if (!this.cryptoValues.length) {
      this.fetchCryptoCurrencies();
    }
  },
};
</script>