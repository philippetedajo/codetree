import React from "react";
import { Tabs } from "@supabase/ui";
import { JsPanel, HtmlPanel, CssPanel } from "./Pans";
import { Helmet } from "react-helmet";
import Preview from "./Preview";
import SplitBox from "./SplitBox";
import Footer from "./Footer";
import Header from "./Header";

const TreeEditor = () => {
  return (
    <div className="bg-editor_secondary" style={{ height: "100vh" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Codetree</title>
        <link rel="canonical" href="https://codetree.vercel.app/" />
      </Helmet>
      {/* Head ======================================= */}
      <Header />

      {/* Editor and Preview ======================================= */}
      <SplitBox direction="horizontal">
        <div className="h-full">
          <Tabs type="underlined">
            <Tabs.Panel id="jstree" label="Js">
              <JsPanel />
            </Tabs.Panel>
            <Tabs.Panel id="htmltree" label="Html">
              <HtmlPanel />
            </Tabs.Panel>
            <Tabs.Panel id="csstree" label="Css">
              <CssPanel />
            </Tabs.Panel>
          </Tabs>
        </div>

        <Preview />
      </SplitBox>

      {/* Foot ======================================= */}
      <Footer />
    </div>
  );
};

export default TreeEditor;
