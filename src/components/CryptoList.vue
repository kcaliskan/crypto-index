<template>
  <div class="container">
    <div v-if="showLoading"><Loading /></div>
    <div v-else>
      <div v-if="!showLoading && !!cryptoData.length">
        <div>
          <table
            class="table table-hover mt-3 data-table shadow text-center mb-5"
          >
            <thead class="table-primary">
              <tr>
                <th v-for="(title, i) in tableTitles" :key="i">{{ title }}</th>
              </tr>
            </thead>
            <tbody
              class="border-0 text-black-50 tbody-border"
              v-for="crypto in cryptoData"
              :key="crypto.id"
            >
              <tr>
                <td v-for="(key, i) in tableDataFields" :key="i">
                  <small>{{
                    checkValue(
                      crypto[key],
                      tableDataSymbols[key],
                      tableDataPrecisions[key]
                    )
                  }}</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>{{ fetchErrorMessage }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "./Loading";
import valueConverter from "../utils/valueConverter";

export default {
  name: "CryptoList",
  props: [
    "cryptoData",
    "fetchErrorMessage",
    "tableTitles",
    "tableDataFields",
    "tableDataSymbols",
    "tableDataPrecisions",
  ],
  components: {
    Loading,
  },
  methods: {
    checkValue: function (val, symbol, precision) {
      return valueConverter(val, symbol, precision);
    },
  },
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