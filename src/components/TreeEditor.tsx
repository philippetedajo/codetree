import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { JsTab, JsPanel, HtmlTab, HtmlPanel, CssTab, CssPanel } from "./Pans";
import { tabStyle, tabListStyle } from "./constants/stylesConfig";
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
        <Tabs style={{ height: "90vh" }}>
          <TabList {...tabListStyle}>
            <Tab {...tabStyle}>
              <JsTab />
            </Tab>
            <Tab {...tabStyle}>
              <HtmlTab />
            </Tab>
            <Tab {...tabStyle}>
              <CssTab />
            </Tab>
          </TabList>

          <TabPanels className="h-full pt-4">
            <TabPanel p={0} className="h-full">
              <JsPanel />
            </TabPanel>
            <TabPanel p={0} className="h-full">
              <HtmlPanel />
            </TabPanel>
            <TabPanel p={0} className="h-full">
              <CssPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Preview />
      </SplitBox>

      {/* Foot ======================================= */}
      <Footer />
    </div>
  );
};

export default TreeEditor;
