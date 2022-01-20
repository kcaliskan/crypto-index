import Vue from "vue";
import App from "./App";
import router from "./router";

import "bootstrap";

new Vue({
  router,
  render: (h) => h(App),
  el: "#app",
});
