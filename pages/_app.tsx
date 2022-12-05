import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Teste Blog</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
