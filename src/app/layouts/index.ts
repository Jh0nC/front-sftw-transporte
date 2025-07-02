import { lazy } from "react";

export const GridLayout = lazy(() =>
  import("./grid-layout").then((module) => ({
    default: module.default,
  }))
);

export const RespContainer = lazy(() =>
  import("./resp-container").then((module) => ({
    default: module.default,
  }))
);
