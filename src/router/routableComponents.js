import Enum from "enum";
import Home from "../views/Home";

const components = new Enum(["HOME"]);

const routableComponents = {
  HOME: {
    name: components.HOME,
    path: "/",
    component: Home,
  },
};

export { routableComponents, components };
