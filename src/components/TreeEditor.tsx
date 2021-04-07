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
        <title>Codetree Playground</title>
        <link rel="canonical" href="https://codetree.vercel.app/" />
      </Helmet>
      {/* Head ======================================= */}
      <Header />

      {/* Editor and Preview ======================================= */}
      <SplitBox direction="horizontal">
        <div className="bg-white border-2 border-red-600 h-full">
          <Tabs type="underlined">
            <Tabs.Panel id="one" label="Tab one">
              <JsPanel />
            </Tabs.Panel>
            <Tabs.Panel id="two" label="Tab two">
              <HtmlPanel />
            </Tabs.Panel>
            <Tabs.Panel id="three" label="Tab three">
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
