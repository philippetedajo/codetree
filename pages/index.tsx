import Head from "next/head";
import Footer from "../components/editor/Footer";
import Main from "../components/editor/Main";
import Header from "../components/editor/Header";

const TreeEditor = () => {
  return (
    <div className="min-h-screen flex items-stretch flex-col bg-editor_secondary">
      <Head>
        <meta charSet="utf-8" />
        <title>Codetree | Playground</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default TreeEditor;
