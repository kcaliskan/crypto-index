<template>
  <div v-if="showLoading"><Loading /></div>
  <div v-else>
    <div v-if="!!searchResult.length">
      <CryptoList
        :cryptoData="searchResult"
        :fetchErrorMessage="fetchErrorMessage"
        :tableTitles="tableTitles"
        :tableDataFields="tableDataFields"
        :tableDataSymbols="tableDataSymbols"
        :tableDataPrecisions="tableDataPrecisions"
        :showPortfolio="true"
      ></CryptoList>
    </div>
    <div v-else>
      <div class="container">
        <div class="row wrapper-row mt-5 p-5 align-items-center">
          <div class="col-6 text-center">
            <h2 class="mb-4">No result for "{{ searchTerm }}" found :(</h2>
            <router-link :to="componentPaths.HOME" class="btn btn-primary"
              >Please click to make a new search</router-link
            >
          </div>
          <div class="col-6">
            <img src="../assets/img/no-search-result.svg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CryptoList from "../components/CryptoList";
import Loading from "../components/Loading";

import {
  SEARCH_RESULT,
  CRYPTO_TABLE_TITLES,
  CRYPTO_TABLE_DATA_FIELDS,
  CRYPTO_DATA_SYMBOLS,
  CRYPTO_DATA_PRECISIONS,
} from "../constants";

import { componentPaths } from "../router/modules/routableComponents";

export default {
  name: "SearchResult",
  components: { CryptoList, Loading },
  data() {
    return {
      componentPaths,
      fetchErrorMessage: SEARCH_RESULT.fetchErrorMessage,
      tableTitles: CRYPTO_TABLE_TITLES,
      tableDataFields: CRYPTO_TABLE_DATA_FIELDS,
      tableDataSymbols: CRYPTO_DATA_SYMBOLS,
      tableDataPrecisions: CRYPTO_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions("search", ["clearSearchTerm"]),
    ...mapActions("crypto", ["checkLocalStoragePortfolio"]),
  },
  computed: {
    ...mapGetters("search", ["searchTerm", "searchResult"]),
    ...mapGetters("crypto", ["showLoading"]),
  },
  created() {
    this.checkLocalStoragePortfolio();
  },
  beforeUnmount() {
    this.clearSearchTerm();
  },
};
</script>

<style scoped lang="scss">
@import "./SearchResult.scss";
</style>