<template>
  <CryptoList :cryptoData="cryptoValues" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList";

export default {
  name: "TrendingListings",
  components: {
    CryptoList,
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