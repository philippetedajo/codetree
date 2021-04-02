import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { JsTab, JsPanel, HtmlTab, HtmlPanel, CssTab, CssPanel } from "./Pans";
import Preview from ".//Preview";
import { tabListConfig, tabConfig } from "./config";
import SplitBox from "./SplitBox";
import Footer from "./Footer";
import Header from "./Header";

const TreeEditor = () => {
  return (
    <div className="bg-editorsecondary" style={{ height: "100vh" }}>
      {/* Head ======================================= */}
      <Header />

      {/* Editor and Preview ======================================= */}
      <SplitBox direction="horizontal">
        <Tabs style={{ height: "90vh" }}>
          <TabList {...tabListConfig}>
            <Tab {...tabConfig}>
              <JsTab />
            </Tab>
            <Tab {...tabConfig}>
              <HtmlTab />
            </Tab>
            <Tab {...tabConfig}>
              <CssTab />
            </Tab>
          </TabList>

          <TabPanels className="h-full">
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
