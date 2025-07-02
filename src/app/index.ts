import { lazy } from "react";

export const App = lazy(() =>
  import("./App").then((module) => ({
    default: module.default,
  }))
);
