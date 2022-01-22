<template>
  <div>
    <div v-if="showLoading">Loading</div>
    <div v-else>Crypto data: {{cryptoValues}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TrendingListings",
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