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
          <link rel="shortcut icon" href="/identity/Codetree32x32.png" />
          <meta
            name="description"
            content="Codetree is a lightning fast online code playground with automatic npm module detection."
          />
          <meta charSet="utf-8" />
          <link rel="canonical" href="https://codetree.vercel.app/" />

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
