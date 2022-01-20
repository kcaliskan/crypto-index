import Vue from "vue";
import VueRouter from "vue-router";
import { components, routableComponents } from "./routableComponents";

Vue.use(VueRouter);

const routes = [];

components.enums.forEach((component) => {
  routes.push(routableComponents[component.key]);
});

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
