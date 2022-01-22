<template>
  <CryptoList
    :cryptoData="exchangeValues"
    :fetchErrorMessage="fetchErrorMessage"
    :tableTitles="tableTitles"
    :tableDataFields="tableDataFields"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList";

import {
  EXCHANGES,
  EXCHANGE_TABLE_TITLES,
  EXCHANGE_TABLE_DATA_FIELDS
} from "../constants";

export default {
  name: "Exchanges",
  components: {
    CryptoList,
  },
  data() {
    return {
      fetchErrorMessage: EXCHANGES.fetchErrorMessage,
      tableTitles: EXCHANGE_TABLE_TITLES,
      tableDataFields: EXCHANGE_TABLE_DATA_FIELDS,
    };
  },
  methods: {
    ...mapActions(["fetchExchanges"]),
  },
  computed: {
    ...mapGetters(["exchangeValues"]),
  },
  beforeMount() {
    if (!this.exchangeValues.length) {
      this.fetchExchanges();
    }
  },
};
</script>