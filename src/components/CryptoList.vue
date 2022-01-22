<template>
  <div class="container">
    <div v-if="showLoading">Loading...</div>
    <div v-else>
      <div v-if="!showLoading && !!cryptoData.length">
        <div>
          <table
            class="table table-hover mt-3 data-table shadow text-center mb-5"
          >
            <thead class="table-primary">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>Volume (24Hr)</th>
                <th>Change (24Hr)</th>
              </tr>
            </thead>
            <tbody
              class="border-0 text-black-50 tbody-border"
              v-for="crypto in cryptoData"
              :key="crypto.id"
            >
              <tr>
                <td>
                  <small>{{ crypto.name }}</small>
                </td>
                <td>
                  <small>{{ crypto.pricdeUsd }}</small>
                </td>
                <td>
                  <small>{{ crypto.marketCapUsd }}</small>
                </td>
                <td>
                  <small>{{ crypto.volumeUsd24Hr }}</small>
                </td>
                <td>
                  <small>{{ crypto.changePercent24Hr }}</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>Fetch error</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CryptoList",
  props: ["cryptoData"],
  computed: {
    ...mapGetters(["showLoading"]),
  },
};
</script>

<style scoped lang="scss">
.data-table {
  border-radius: 8px;
  overflow: hidden;
}

.tbody-border {
  border-color: #f0f0f0 !important;
}
</style>