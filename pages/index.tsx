import Head from "next/head";
import dynamic from "next/dynamic";
import Split from "react-split";
import Tabs, { TabPane } from "rc-tabs";
import { JsPanel, HtmlPanel, CssPanel } from "../components/Pans";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TreeEditor = () => {
  const PreviewWithNoSSR = dynamic(() => import("../components/Preview"), {
    ssr: false,
  });

  return (
    <div>
      <div className="bg-editor_secondary" style={{ height: "100vh" }}>
        <Head>
          <meta charSet="utf-8" />
          <title>Codetree | Playground</title>
        </Head>

        {/* Head ======================================= */}
        <Header />

        {/* Editor and Preview ======================================= */}
        <Split
          sizes={[50, 50]}
          minSize={100}
          expandToMin={true}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
          className="flex"
        >
          <div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Js" key="1">
                <JsPanel />
              </TabPane>
              <TabPane tab="Html" key="2">
                <HtmlPanel />
              </TabPane>
              <TabPane tab="css" key="3">
                <CssPanel />
              </TabPane>
            </Tabs>
          </div>
          <div>
            <PreviewWithNoSSR />
          </div>
        </Split>

        {/* Foot ======================================= */}
        <Footer />
      </div>
    </div>
  );
};

export default TreeEditor;
