import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import PageTemplate from "@/components/templates/PageTemplate";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </Provider>
  );
}
