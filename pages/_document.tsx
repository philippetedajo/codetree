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

          <meta
            property="og:url"
            content="https://codetree.vercel.app/"
            key="ogurl"
          />
          <meta
            property="og:image"
            content="/preview-image.png"
            key="ogimage"
          />
          <meta property="og:site_name" content="Codetree" key="ogsitename" />
          <meta property="og:title" content="Codetree" key="ogtitle" />
          <meta
            property="og:description"
            content="Codetree is a lightning fast online code playground with automatic npm module detection."
            key="ogdesc"
          />
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
