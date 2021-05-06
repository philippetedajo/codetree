import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Split from "react-split";
import Tabs, { TabPane } from "rc-tabs";
import { JsPanel, HtmlPanel, CssPanel } from "../components-editor/Pans";
import Footer from "../components-editor/Footer";
import Header from "../components-editor/Header";
import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { DiCssTricks, DiJavascript1 } from "react-icons/di";

const TreeEditor = () => {
  const [gutter, setGutter] = useState(false);

  const PreviewWithNoSSR = dynamic(
    () => import("../components-editor/Preview"),
    {
      ssr: false,
    }
  );

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
            <Tabs
              tabPosition={"top"}
              tabBarGutter={gutter ? 16 : null}
              className="programming-language-tabs"
              defaultActiveKey="js"
            >
              <TabPane tab={<div className="text-base">Js </div>} key="js">
                <JsPanel />
              </TabPane>
              <TabPane tab={<div className="text-base">Html </div>} key="html">
                <HtmlPanel />
              </TabPane>
              <TabPane tab={<div className="text-base">Css</div>} key="css">
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
