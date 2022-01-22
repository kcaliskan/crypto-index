import Enum from "enum";
import Home from "../views/Home";
import TrendingListings from "../views/TrendingListings";

const components = new Enum([
  "HOME",
  "TRENDING_LISTINGS",
  "EXCHANGES",
  "PORTFOLIO",
]);

const routableComponents = {
  HOME: {
    name: components.HOME,
    path: "/",
    component: Home,
  },
  TRENDING_LISTINGS: {
    name: components.TRENDING_LISTINGS,
    path: "/trendinglistings",
    component: TrendingListings,
  },
  EXCHANGES: {
    name: components.EXCHANGES,
    path: "/exchanges",
  },
  PORTFOLIO: {
    name: components.PORTFOLIO,
    path: "/portfolio",
  },
};

export { routableComponents, components };
