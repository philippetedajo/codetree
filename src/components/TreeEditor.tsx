import React from "react";
import Split from "react-split";
import Tabs, { TabPane } from "rc-tabs";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@react-hook/media-query";
import { JsPanel, HtmlPanel, CssPanel } from "./Pans";
import Preview from "./Preview";
import Footer from "./Footer";
import Header from "./Header";

const TreeEditor = () => {
  const matches = useMediaQuery("only screen and (min-width: 550px)");

  const splitProps = {
    className: "split-horizontal",
    minSize: 0,
    expandToMin: false,
    gutterSize: 5,
    gutterAlign: "center",
    snapOffset: 30,
    dragInterval: 1,
    direction: "horizontal",
    cursor: "col-resize",
  };

  return (
    <div>
      {matches ? (
        <div className="bg-editor_secondary" style={{ height: "100vh" }}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Codetree</title>
            <link rel="canonical" href="https://codetree.vercel.app/" />
          </Helmet>

          {/* Head ======================================= */}
          <Header />

          {/* Editor and Preview ======================================= */}
          <Split {...splitProps}>
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
            <Preview />
          </Split>

          {/* Foot ======================================= */}
          <Footer />
        </div>
      ) : (
        <div className="bg-tree-hard text-white h-screen flex items-center justify-center text-center font-semibold">
          <div>
            The application is not yet supported on mobile, please open{" "}
            <span className="text-green-500"> CodeTree</span> on a computer
          </div>
        </div>
      )}
    </div>
  );
};

export default TreeEditor;
