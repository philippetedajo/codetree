import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { JsTab, JsPanel, HtmlTab, HtmlPanel, CssTab, CssPanel } from "./Pans";
import { tabListConfig, tabConfig } from "./config";
import SplitBox from "../components/SplitBox";

const TreeEditor = () => {
  return (
    <div style={{ height: "100vh" }}>
      {/* Head ======================================= */}
      <header
        style={{ height: "6.5vh" }}
        className="flex justify-between items-center editor-header bg-editorprimary text-white border-b-2 border-editorborder px-9"
      >
        header
      </header>

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

          <TabPanels className="h-full pt-5">
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

        <div>hello world</div>
      </SplitBox>

      {/* Foot ======================================= */}
      <footer
        style={{ height: "3.5vh" }}
        className="editor-footer flex justify-end item-center px-5 text-white text-sm bg-editorprimary border-t-2 border-editorborder"
      >
        footer
      </footer>
    </div>
  );
};

export default TreeEditor;
