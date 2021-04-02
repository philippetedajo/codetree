import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { JsTab, JsPanel, HtmlTab, HtmlPanel, CssTab, CssPanel } from "./Pans";
import Preview from ".//Preview";
import { tabListConfig, tabConfig } from "./config";
import SplitBox from "./SplitBox";
import { editor_state } from "../store/features/editorSlice";
import { useAppSelector } from "../store/hook";

const TreeEditor = () => {
  const { js } = useAppSelector(editor_state);
  console.log(js);
  return (
    <div className="bg-editorsecondary" style={{ height: "100vh" }}>
      {/* Head ======================================= */}
      <header
        style={{ height: "6.5vh" }}
        className="flex justify-between items-center editor-header bg-editorprimary text-white border-b-2 border-editorborder px-9"
      >
        CodeTree
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
      <footer
        style={{ height: "3.5vh" }}
        className="editor-footer flex justify-end item-center px-5 text-white text-sm bg-editorprimary border-t-2 border-editorborder"
      >
        {js.code.loading && <p>...Transpiling</p>}
      </footer>
    </div>
  );
};

export default TreeEditor;
