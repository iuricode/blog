import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Teste Blog</title>
      </Head>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
};

export default MyApp;
