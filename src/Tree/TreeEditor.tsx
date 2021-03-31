import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { JsTab, JsPanel, HtmlTab, HtmlPanel, CssTab, CssPanel } from "./Pans";
import SplitBox from "../components/SplitBox";
import "react-tabs/style/react-tabs.css";

const TreeEditor = () => {
  return (
    <div style={{ height: "100vh" }}>
      {/* Head ======================================= */}
      <header style={{ height: "6.5vh" }}>header</header>

      {/* Editor and Preview ======================================= */}
      <SplitBox direction="horizontal">
        <Tabs
          style={{ height: "90vh" }}
          className="h-full border-2 border-red-600 "
        >
          <TabList>
            <Tab>
              <JsTab />
            </Tab>
            <Tab>
              <HtmlTab />
            </Tab>
            <Tab>
              <CssTab />
            </Tab>
          </TabList>

          <TabPanels className="h-full pt-5">
            <TabPanel className="h-full">
              <JsPanel />
            </TabPanel>
            <TabPanel className="h-full">
              <HtmlPanel />
            </TabPanel>
            <TabPanel className="h-full">
              <CssPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div>hello world</div>
      </SplitBox>

      {/* Foot ======================================= */}
      <footer style={{ height: "3.5vh" }}>footer</footer>
    </div>
  );
};

export default TreeEditor;
