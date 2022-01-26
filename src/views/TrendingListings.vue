<template>
  <CryptoList
    :cryptoData="CRYPTO_VALUES"
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

import {
  CRYPTO_STORE,
  CRYPTO_VALUES,
  FETCH_CRYPTO_CURRENCIES,
  SHOW_LOADING,
} from "../store/modules/types";

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
    ...mapActions(CRYPTO_STORE, [FETCH_CRYPTO_CURRENCIES]),
  },
  computed: {
    ...mapGetters(CRYPTO_STORE, [CRYPTO_VALUES, SHOW_LOADING]),
  },
  beforeMount() {
    if (!this.CRYPTO_VALUES.length) {
      this.FETCH_CRYPTO_CURRENCIES();
    }
  },
};
</script>