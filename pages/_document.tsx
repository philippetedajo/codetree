import Document, { Html, Head, Main, NextScript } from "next/document";

class CodetreeDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon-16x16.png" />
          <meta
            name="description"
            content="Codetree is a lightning fast online code playground with automatic npm module detection."
          />
          <meta charSet="utf-8" />
          <link rel="canonical" href="https://codetree.vercel.app/" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Philippe Tedajo" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CodetreeDocument;
