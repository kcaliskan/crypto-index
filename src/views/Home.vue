<template>
  <div class="container">
    <div class="row wrapper-row mt-5 p-5 align-items-center">
      <div class="col-6">
        <h2 class="text-center mb-5">
          Keep up with the crypto world by searching coins!
        </h2>
        <ValidationObserver v-slot="{handleSubmit}">
        <form @submit.prevent="handleSubmit(onSubmit)" novalidate>
          <div class="form-group position-relative">
            <ValidationProvider
              name="searchInput"
              rules="required|alpha_num_req"
              v-slot="{errors}"
            >
            <input
              type="text"
              class="form-control rounded-pill shadow-lg"
              :class="errors[0] ? 'border-danger' : 'border-0' "
              placeholder="Search by cryptocurrency name"
              name="searchTerm"
              v-model="searchTerm"
            />
            <i
              class="fas fa-search search-icon position-absolute"
              @click="handleSubmit(onSubmit)"
            ></i>
            <span class="error-span mt-2 text-danger">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
        </form>
        </ValidationObserver>
      </div>
      <div class="col-6">
        <img src="../assets/img/landing-right-bg.png" class="img-fluid" />
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              class="card-icon-size"
              src="../assets/img/trending.png"
              alt="trending-cryptocurrencies"
            />
            <p class="card-text mt-2 card-description">
              Get to know about the most popular and trending cryptocurrencies
            </p>
            <a href="#" class="btn btn-dark text-light text-center"
              >Trending Listings</a
            >
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              class="card-icon-size"
              src="../assets/img/exchanges.png"
              alt="crypto-exchanges"
            />
            <p class="card-text mt-2 card-description">
              Keep up with the crypto exchange markets.
            </p>
            <a href="#" class="btn btn-dark text-light text-center"
              >Exchanges</a
            >
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              class="card-icon-size"
              src="../assets/img/portfolio.png"
              alt="portfolio"
            />
            <p class="card-text mt-2 card-description">
              Check your portfolio and see how they perform.
            </p>
            <a href="#" class="btn btn-dark text-light text-center"
              >My Portfolio</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import "../forms/rules/req";
import "../forms/rules/alpha_num_req";

export default {
  name: "Home",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("onsubmit run", this.searchTerm);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Home.scss";
</style>
