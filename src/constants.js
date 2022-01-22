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
  CRYPTO_DATA_SYMBOLS: {
    name: "",
    priceUsd: "$",
    marketCapUsd: "$",
    volumeUsd24Hr: "$",
    changePercent24Hr: "%",
  },
  CRYPTO_DATA_PRECISIONS: {
    priceUsd: 3,
    marketCapUsd: 2,
    volumeUsd24Hr: 2,
    changePercent24Hr: 2,
  },
  EXCHANGE_TABLE_TITLES: [
    "Name",
    "Trading Pairs",
    "Volume (24Hr)",
    "Total (%)",
  ],
  EXCHANGE_TABLE_DATA_FIELDS: {
    NAME: "name",
    TRADING_PAIRS: "tradingPairs",
    VOLUME: "volumeUsd",
    PERCENT_TOTAL_VOLUME: "percentTotalVolume",
  },
  EXCHANGE_DATA_SYMBOLS: {
    name: "",
    tradingPairs: "",
    volumeUsd: "$",
    percentTotalVolume: "%",
  },
  EXCHANGE_DATA_PRECISIONS: {
    volumeUsd: 3,
    percentTotalVolume: 2,
  },
};
