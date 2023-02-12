import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Analytics />
    </React.Fragment>
  );
};

export default MyApp;
