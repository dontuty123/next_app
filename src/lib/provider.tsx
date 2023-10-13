/** @format */

"use client";

/* Core */
import { Provider } from "react-redux";
import { store } from "./redux/store";

/* Instruments */

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};