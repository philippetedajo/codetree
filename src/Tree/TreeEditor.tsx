import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Js, Html, Css } from "./Pans";
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
            <Tab>Js</Tab>
            <Tab>Html</Tab>
            <Tab>Css</Tab>
          </TabList>

          <TabPanel>
            <Js />
          </TabPanel>
          <TabPanel>
            <Html />
          </TabPanel>
          <TabPanel>
            <Css />
          </TabPanel>
        </Tabs>

        <div>hello world</div>
      </SplitBox>

      {/* Foot ======================================= */}
      <footer style={{ height: "3.5vh" }}>footer</footer>
    </div>
  );
};

export default TreeEditor;
