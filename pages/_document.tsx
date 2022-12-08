import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" type="image/png" href="/logo-iuricode.svg"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
