import SearchResult from "../../views/SearchResult";
import { components, componentPaths } from "./routableComponents";
import store from "../../store";

export default {
  name: components.SEARCH_RESULT,
  path: componentPaths.SEARCH_RESULT,
  component: SearchResult,
  beforeEnter: (to, from, next) => {
    const searchTerm = store.getters["search/searchTerm"];

    if (!searchTerm) {
      next(componentPaths.HOME);
    } else {
      next();
    }
  },
};
