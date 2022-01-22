module.exports = {
  CRYPTO_API: {
    BASE_URL: "https://pacific-waters-19946.herokuapp.com",
    CRYPTO_PATH: "/v2/assets",
    EXCHANGE_PATH: "/v2/exchanges",
  },
  LOADING: "Loading...",
  TRENDING_LISTING: {
    fetchErrorMessage: "There is an problem occured. Please try again later.",
  },
  EXCHANGES: {
    fetchErrorMessage: "There is an problem occured. Please try again later.",
  },
  CRYPTO_TABLE_TITLES: [
    "Name",
    "Price",
    "Market Cap",
    "Volume (24Hr)",
    "Change (24Hr)",
  ],
  CRYPTO_TABLE_DATA_FIELDS: {
    NAME: "name",
    PRICE: "priceUsd",
    marketCap: "marketCapUsd",
    volume: "volumeUsd24Hr",
    changePercent: "changePercent24Hr",
  },
  EXCHANGE_TABLE_TITLES: ["Name", "Trading Pairs", "Volume (24Hr)", "Total (%)"],
  EXCHANGE_TABLE_DATA_FIELDS: {
    NAME: "name",
    TRADING_PAIRS: "tradingPairs",
    VOLUME: "volumeUsd",
    PERCENT_TOTAL_VOLUME: "percentTotalVolume"
  },
};
